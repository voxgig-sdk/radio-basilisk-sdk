import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "music",
    "accessor": "Music",
    "op": "list",
    "method": "GET",
    "path": "/songs/recently-played",
    "args": [],
    "select": {
      "limit": "v1"
    },
    "headers": [],
    "query": [
      "limit"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "songs": [
        {
          "id": "12345",
          "title": "Example Song",
          "artist": "Example Artist",
          "album": "Example Album",
          "playedAt": "2026-01-15T10:30:00Z",
          "duration": 210,
          "coverImage": "https://example.com/cover.jpg"
        }
      ],
      "count": 1,
      "timestamp": "2026-01-15T10:35:00Z"
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
