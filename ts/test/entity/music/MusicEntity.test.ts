

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { RadioBasiliskSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('MusicEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RADIO_BASILISK_TEST_LIVE=TRUE.
  afterEach(liveDelay('RADIO_BASILISK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RadioBasiliskSDK.test()
    const ent = testsdk.Music()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('music hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of RadioBasiliskSDK.test(offline).Music().stream('list')) { }
    }, /offline/)

    for await (const _item of RadioBasiliskSDK.test(offline).Music()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = RadioBasiliskSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Music().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of RadioBasiliskSDK.test().Music().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new RadioBasiliskSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Music().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Music().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = RadioBasiliskSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Music().list({"limit":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RADIO_BASILISK_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'music.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"album":{"a":true,"h":"Album","n":"album","r":false,"sh":"Album name","t":"`$STRING`","key$":"album","index$":0},"artist":{"a":true,"h":"Artist","n":"artist","r":true,"sh":"Artist name","t":"`$STRING`","key$":"artist","index$":1},"coverImage":{"a":true,"fo":"uri","h":"Cover Image","n":"coverImage","r":false,"sh":"URL to the album cover image","t":"`$STRING`","key$":"coverImage","index$":2},"duration":{"a":true,"h":"Duration","n":"duration","r":false,"sh":"Duration of the song in seconds","t":"`$INTEGER`","key$":"duration","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the song","t":"`$STRING`","key$":"id","index$":4},"playedAt":{"a":true,"fo":"date-time","h":"Played At","n":"playedAt","r":true,"sh":"Timestamp when the song was played","t":"`$STRING`","key$":"playedAt","index$":5},"title":{"a":true,"h":"Title","n":"title","r":true,"sh":"Title of the song","t":"`$STRING`","key$":"title","index$":6}},"id":{"field":"id","name":"id"},"name":"music","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /songs/recently-played","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/songs/recently-played","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"songs"},{"lit":"recently-played"}],"t":{"req":"`reqdata`","res":"`body.songs`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"music","name__orig":"music","Name":"Music","name_":"music","name-":"music","NAME":"MUSIC","index$":0}, {"active":true,"entity":"music","key$":"BasicMusicFlow","kind":"basic","name":"BasicMusicFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"music_ref01"}}],"index$":0}]}, 'Music', {"GET /songs/recently-played":{"protocol":"http","parameters":[{"name":"limit","in":"query","description":"Number of songs to return","required":false,"schema":{"type":"integer","default":10,"minimum":1,"maximum":50},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let music_ref01_data = Object.values(setup.data.existing.music)[0] as any

    // LIST
    const music_ref01_ent = client.Music()
    const music_ref01_match: any = {}

    const music_ref01_list = (await music_ref01_ent.list(music_ref01_match)).map((e: any) => e.data())


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/music/MusicTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = RadioBasiliskSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['music01','music02','music03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RADIO_BASILISK_TEST_MUSIC_ENTID': idmap,
    'RADIO_BASILISK_TEST_LIVE': 'FALSE',
    'RADIO_BASILISK_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['RADIO_BASILISK_TEST_MUSIC_ENTID']

  const live = 'TRUE' === env.RADIO_BASILISK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RADIO_BASILISK_TEST_MUSIC_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new RadioBasiliskSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.RADIO_BASILISK_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
