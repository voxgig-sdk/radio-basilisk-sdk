<?php
declare(strict_types=1);

// RadioBasilisk SDK configuration

class RadioBasiliskConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "RadioBasilisk",
                "slug" => "radio-basilisk",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://www.basilisk.ch/api",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "music" => [],
                ],
            ],
            "entity" => [
        'music' => [
          'fields' => [
            [
              'name' => 'album',
              'short' => 'Album name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'artist',
              'req' => true,
              'short' => 'Artist name',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'uri',
              'name' => 'coverImage',
              'short' => 'URL to the album cover image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'duration',
              'short' => 'Duration of the song in seconds',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the song',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date-time',
              'name' => 'playedAt',
              'req' => true,
              'short' => 'Timestamp when the song was played',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'req' => true,
              'short' => 'Title of the song',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'music',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/songs/recently-played',
                  'segments' => [
                    [
                      'lit' => 'songs',
                    ],
                    [
                      'lit' => 'recently-played',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'limit',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.songs`',
                  ],
                  'parts' => [
                    'songs',
                    'recently-played',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return RadioBasiliskFeatures::make_feature($name);
    }
}
