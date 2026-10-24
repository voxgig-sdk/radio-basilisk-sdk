
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'RadioBasilisk',
        slug: "radio-basilisk",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "now": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://www.basilisk.ch/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        music: {
        },
  
    }
  }


  entity = {
    "music": {
      "fields": [
        {
          "name": "album",
          "title": "Album",
          "type": "`$STRING`",
          "short": "Album name"
        },
        {
          "name": "artist",
          "title": "Artist",
          "type": "`$STRING`",
          "req": true,
          "short": "Artist name"
        },
        {
          "name": "coverImage",
          "title": "Cover Image",
          "type": "`$STRING`",
          "short": "URL to the album cover image",
          "format": "uri"
        },
        {
          "name": "duration",
          "title": "Duration",
          "type": "`$INTEGER`",
          "short": "Duration of the song in seconds"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the song"
        },
        {
          "name": "playedAt",
          "title": "Played At",
          "type": "`$STRING`",
          "req": true,
          "short": "Timestamp when the song was played",
          "format": "date-time"
        },
        {
          "name": "title",
          "title": "Title",
          "type": "`$STRING`",
          "req": true,
          "short": "Title of the song"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "music",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/songs/recently-played",
              "segments": [
                {
                  "lit": "songs"
                },
                {
                  "lit": "recently-played"
                }
              ],
              "parts": [
                "songs",
                "recently-played"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.songs`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 10
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

