# RadioBasilisk SDK configuration

module RadioBasiliskConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "RadioBasilisk",
        "slug" => "radio-basilisk",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://www.basilisk.ch/api",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "music" => {},
        },
      },
      "entity" => {
        "music" => {
          "fields" => [
            {
              "name" => "album",
              "short" => "Album name",
              "type" => "`$STRING`",
            },
            {
              "name" => "artist",
              "req" => true,
              "short" => "Artist name",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "coverImage",
              "short" => "URL to the album cover image",
              "type" => "`$STRING`",
            },
            {
              "name" => "duration",
              "short" => "Duration of the song in seconds",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the song",
              "type" => "`$STRING`",
            },
            {
              "format" => "date-time",
              "name" => "playedAt",
              "req" => true,
              "short" => "Timestamp when the song was played",
              "type" => "`$STRING`",
            },
            {
              "name" => "title",
              "req" => true,
              "short" => "Title of the song",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "music",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => 10,
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/songs/recently-played",
                  "segments" => [
                    {
                      "lit" => "songs",
                    },
                    {
                      "lit" => "recently-played",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "limit",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.songs`",
                  },
                  "parts" => [
                    "songs",
                    "recently-played",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    RadioBasiliskFeatures.make_feature(name)
  end
end
