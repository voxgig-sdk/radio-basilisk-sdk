
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


  main = {
    name: 'RadioBasilisk',
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
          "type": "`$STRING`"
        },
        {
          "name": "artist",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "coverImage",
          "type": "`$STRING`"
        },
        {
          "name": "duration",
          "type": "`$INTEGER`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "playedAt",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "req": true,
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

