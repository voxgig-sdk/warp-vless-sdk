# GithubError SDK configuration

module GithubErrorConfig
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
        "name" => "GithubError",
        "slug" => "github-error",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
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
              "short" => "Amnezia VPN mode configuration",
              "type" => "`$STRING`",
            },
            {
              "name" => "configs",
              "short" => "Array of configuration objects when multiple configs are returned",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "content",
              "short" => "Base64 encoded WARP configuration content",
              "type" => "`$STRING`",
            },
            {
              "name" => "deviceType",
              "short" => "The type of device requesting the configuration",
              "type" => "`$STRING`",
            },
            {
              "name" => "errorCode",
              "short" => "Error code if an error occurred",
              "type" => "`$STRING`",
            },
            {
              "name" => "message",
              "short" => "Human-readable message or error description",
              "type" => "`$STRING`",
            },
            {
              "name" => "selectedDns",
              "short" => "DNS provider selection",
              "type" => "`$STRING`",
            },
            {
              "name" => "selectedServices",
              "short" => "List of selected services to include in the configuration",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "siteMode",
              "short" => "The site mode for the WARP configuration",
              "type" => "`$STRING`",
            },
          ],
          "name" => "warp",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/warp",
                  "parts" => [
                    "api",
                    "warp",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
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
    GithubErrorFeatures.make_feature(name)
  end
end
