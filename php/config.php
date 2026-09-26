<?php
declare(strict_types=1);

// WarpVless SDK configuration

class WarpVlessConfig
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
                "name" => "WarpVless",
                "slug" => "warp-vless",
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
                "base" => "https://warp-vless.vercel.app",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "warp" => [],
                ],
            ],
            "entity" => [
        'warp' => [
          'fields' => [
            [
              'name' => 'amneziaMode',
              'title' => 'Amnezia Mode',
              'type' => '`$STRING`',
              'short' => 'Amnezia VPN mode configuration',
            ],
            [
              'name' => 'configs',
              'title' => 'Configs',
              'type' => '`$ARRAY`',
              'short' => 'Array of configuration objects when multiple configs are returned',
            ],
            [
              'name' => 'content',
              'title' => 'Content',
              'type' => '`$STRING`',
              'short' => 'Base64 encoded WARP configuration content',
            ],
            [
              'name' => 'deviceType',
              'title' => 'Device Type',
              'type' => '`$STRING`',
              'short' => 'The type of device requesting the configuration',
            ],
            [
              'name' => 'errorCode',
              'title' => 'Error Code',
              'type' => '`$STRING`',
              'short' => 'Error code if an error occurred',
            ],
            [
              'name' => 'message',
              'title' => 'Message',
              'type' => '`$STRING`',
              'short' => 'Human-readable message or error description',
            ],
            [
              'name' => 'selectedDns',
              'title' => 'Selected Dns',
              'type' => '`$STRING`',
              'short' => 'DNS provider selection',
            ],
            [
              'name' => 'selectedServices',
              'title' => 'Selected Services',
              'type' => '`$ARRAY`',
              'short' => 'List of selected services to include in the configuration',
            ],
            [
              'name' => 'siteMode',
              'title' => 'Site Mode',
              'type' => '`$STRING`',
              'short' => 'The site mode for the WARP configuration',
            ],
          ],
          'name' => 'warp',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/warp',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'warp',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'warp',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
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
        return WarpVlessFeatures::make_feature($name);
    }
}
