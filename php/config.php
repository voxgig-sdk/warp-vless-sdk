<?php
declare(strict_types=1);

// GithubError SDK configuration

class GithubErrorConfig
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
                "name" => "GithubError",
                "slug" => "github-error",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
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
              'short' => 'Amnezia VPN mode configuration',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'configs',
              'short' => 'Array of configuration objects when multiple configs are returned',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'content',
              'short' => 'Base64 encoded WARP configuration content',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'deviceType',
              'short' => 'The type of device requesting the configuration',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'errorCode',
              'short' => 'Error code if an error occurred',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'message',
              'short' => 'Human-readable message or error description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'selectedDns',
              'short' => 'DNS provider selection',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'selectedServices',
              'short' => 'List of selected services to include in the configuration',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'siteMode',
              'short' => 'The site mode for the WARP configuration',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'warp',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/warp',
                  'parts' => [
                    'api',
                    'warp',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
        return GithubErrorFeatures::make_feature($name);
    }
}
