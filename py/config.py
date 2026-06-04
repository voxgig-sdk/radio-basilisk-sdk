# RadioBasilisk SDK configuration


def make_config():
    return {
        "main": {
            "name": "RadioBasilisk",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://www.basilisk.ch/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "music": {},
            },
        },
        "entity": {
      "music": {
        "fields": [
          {
            "name": "album",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "artist",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "cover_image",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "duration",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "played_at",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "title",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
        ],
        "name": "music",
        "op": {
          "list": {
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
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/songs/recently-played",
                "parts": [
                  "songs",
                  "recently-played",
                ],
                "select": {
                  "exist": [
                    "limit",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
