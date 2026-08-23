
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
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
     test:     {
      "options": {
        "active": false
      }
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
          "short": "Album name",
          "type": "`$STRING`"
        },
        {
          "name": "artist",
          "req": true,
          "short": "Artist name",
          "type": "`$STRING`"
        },
        {
          "name": "coverImage",
          "short": "URL to the album cover image",
          "type": "`$STRING`"
        },
        {
          "name": "duration",
          "short": "Duration of the song in seconds",
          "type": "`$INTEGER`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the song",
          "type": "`$STRING`"
        },
        {
          "name": "playedAt",
          "req": true,
          "short": "Timestamp when the song was played",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "req": true,
          "short": "Title of the song",
          "type": "`$STRING`"
        }
      ],
      "name": "music",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/songs/recently-played",
              "parts": [
                "songs",
                "recently-played"
              ],
              "select": {
                "exist": [
                  "limit"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.songs`"
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
  config
}

