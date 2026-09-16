

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { RadioBasiliskSDK, BaseFeature, stdutil } from '../../..'

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RADIO_BASILISK_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'music.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"album","req":false,"short":"Album name","type":"`$STRING`","index$":0},{"active":true,"name":"artist","req":true,"short":"Artist name","type":"`$STRING`","index$":1},{"active":true,"format":"uri","name":"coverImage","req":false,"short":"URL to the album cover image","type":"`$STRING`","index$":2},{"active":true,"name":"duration","req":false,"short":"Duration of the song in seconds","type":"`$INTEGER`","index$":3},{"active":true,"name":"id","req":false,"short":"Unique identifier for the song","type":"`$STRING`","index$":4},{"active":true,"format":"date-time","name":"playedAt","req":true,"short":"Timestamp when the song was played","type":"`$STRING`","index$":5},{"active":true,"name":"title","req":true,"short":"Title of the song","type":"`$STRING`","index$":6}],"id":{"field":"id","name":"id"},"name":"music","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":10,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /songs/recently-played","json":"{\"operationId\":\"getRecentlyPlayedSongs\",\"parameters\":[{\"description\":\"Number of songs to return\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":50,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"recentSongs\":{\"value\":{\"count\":1,\"songs\":[{\"album\":\"Example Album\",\"artist\":\"Example Artist\",\"coverImage\":\"https://example.com/cover.jpg\",\"duration\":210,\"id\":\"12345\",\"playedAt\":\"2026-01-15T10:30:00Z\",\"title\":\"Example Song\"}],\"timestamp\":\"2026-01-15T10:35:00Z\"}}},\"schema\":{\"properties\":{\"count\":{\"description\":\"Number of songs returned\",\"type\":\"integer\"},\"songs\":{\"items\":{\"properties\":{\"album\":{\"description\":\"Album name\",\"type\":\"string\"},\"artist\":{\"description\":\"Artist name\",\"type\":\"string\"},\"coverImage\":{\"description\":\"URL to the album cover image\",\"format\":\"uri\",\"type\":\"string\"},\"duration\":{\"description\":\"Duration of the song in seconds\",\"type\":\"integer\"},\"id\":{\"description\":\"Unique identifier for the song\",\"type\":\"string\"},\"playedAt\":{\"description\":\"Timestamp when the song was played\",\"format\":\"date-time\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the song\",\"type\":\"string\"}},\"required\":[\"title\",\"artist\",\"playedAt\"],\"type\":\"object\"},\"type\":\"array\"},\"timestamp\":{\"description\":\"Timestamp of the response\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp of the error\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Bad request\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp of the error\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/songs/recently-played","segments":[{"lit":"songs"},{"lit":"recently-played"}],"select":{"exist":["limit"]},"transform":{"req":"`reqdata`","res":"`body.songs`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"music","name__orig":"music","Name":"Music","name_":"music","name-":"music","NAME":"MUSIC","index$":0}, {"active":true,"entity":"music","key$":"BasicMusicFlow","kind":"basic","name":"BasicMusicFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"music_ref01"}}],"index$":0}]}, 'Music')
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
  
