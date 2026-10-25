# WarpVless SDK configuration

module WarpVlessConfig
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
        "name" => "WarpVless",
        "slug" => "warp-vless",
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
            "now" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://warp-vless.vercel.app",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "warp" => {},
        },
      },
      "entity" => {
        "warp" => {
          "fields" => [
            {
              "name" => "amneziaMode",
              "title" => "Amnezia Mode",
              "type" => "`$STRING`",
              "short" => "Amnezia VPN mode configuration",
            },
            {
              "name" => "configs",
              "title" => "Configs",
              "type" => "`$ARRAY`",
              "short" => "Array of configuration objects when multiple configs are returned",
            },
            {
              "name" => "content",
              "title" => "Content",
              "type" => "`$STRING`",
              "short" => "Base64 encoded WARP configuration content",
            },
            {
              "name" => "deviceType",
              "title" => "Device Type",
              "type" => "`$STRING`",
              "short" => "The type of device requesting the configuration",
            },
            {
              "name" => "errorCode",
              "title" => "Error Code",
              "type" => "`$STRING`",
              "short" => "Error code if an error occurred",
            },
            {
              "name" => "message",
              "title" => "Message",
              "type" => "`$STRING`",
              "short" => "Human-readable message or error description",
            },
            {
              "name" => "selectedDns",
              "title" => "Selected Dns",
              "type" => "`$STRING`",
              "short" => "DNS provider selection",
            },
            {
              "name" => "selectedServices",
              "title" => "Selected Services",
              "type" => "`$ARRAY`",
              "short" => "List of selected services to include in the configuration",
            },
            {
              "name" => "siteMode",
              "title" => "Site Mode",
              "type" => "`$STRING`",
              "short" => "The site mode for the WARP configuration",
            },
          ],
          "name" => "warp",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/warp",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "warp",
                    },
                  ],
                  "parts" => [
                    "api",
                    "warp",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "body" => {
                    "alternatives" => [
                      {
                        "fields" => [
                          {
                            "name" => "amneziaMode",
                          },
                          {
                            "name" => "deviceType",
                          },
                          {
                            "name" => "selectedDns",
                          },
                          {
                            "name" => "selectedServices",
                          },
                          {
                            "name" => "siteMode",
                          },
                        ],
                        "kind" => "form",
                        "media" => "application/x-www-form-urlencoded",
                      },
                    ],
                    "kind" => "json",
                    "media" => "application/json",
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
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
    WarpVlessFeatures.make_feature(name)
  end
end
