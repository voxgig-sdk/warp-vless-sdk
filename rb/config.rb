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
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
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
              "type" => "`$STRING`",
            },
            {
              "name" => "configs",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "content",
              "type" => "`$STRING`",
            },
            {
              "name" => "deviceType",
              "type" => "`$STRING`",
            },
            {
              "name" => "errorCode",
              "type" => "`$STRING`",
            },
            {
              "name" => "message",
              "type" => "`$STRING`",
            },
            {
              "name" => "selectedDns",
              "type" => "`$STRING`",
            },
            {
              "name" => "selectedServices",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "siteMode",
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
