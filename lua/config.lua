-- RadioBasilisk SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "RadioBasilisk",
      slug = "radio-basilisk",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://www.basilisk.ch/api",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["music"] = {},
      },
    },
    entity = {
      ["music"] = {
        ["fields"] = {
          {
            ["name"] = "album",
            ["short"] = "Album name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "artist",
            ["req"] = true,
            ["short"] = "Artist name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "coverImage",
            ["short"] = "URL to the album cover image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "duration",
            ["short"] = "Duration of the song in seconds",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the song",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "playedAt",
            ["req"] = true,
            ["short"] = "Timestamp when the song was played",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["req"] = true,
            ["short"] = "Title of the song",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "music",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/songs/recently-played",
                ["parts"] = {
                  "songs",
                  "recently-played",
                },
                ["select"] = {
                  ["exist"] = {
                    "limit",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.songs`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
