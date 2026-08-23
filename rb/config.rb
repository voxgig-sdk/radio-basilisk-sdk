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
        "test" => {
          "options" => {
            "active" => false,
          },
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
                  "parts" => [
                    "songs",
                    "recently-played",
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
