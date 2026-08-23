-- GithubError SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "GithubError",
      slug = "github-error",
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
      base = "https://warp-vless.vercel.app",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["warp"] = {},
      },
    },
    entity = {
      ["warp"] = {
        ["fields"] = {
          {
            ["name"] = "amneziaMode",
            ["short"] = "Amnezia VPN mode configuration",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "configs",
            ["short"] = "Array of configuration objects when multiple configs are returned",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "content",
            ["short"] = "Base64 encoded WARP configuration content",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "deviceType",
            ["short"] = "The type of device requesting the configuration",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "errorCode",
            ["short"] = "Error code if an error occurred",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "message",
            ["short"] = "Human-readable message or error description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "selectedDns",
            ["short"] = "DNS provider selection",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "selectedServices",
            ["short"] = "List of selected services to include in the configuration",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "siteMode",
            ["short"] = "The site mode for the WARP configuration",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "warp",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/warp",
                ["parts"] = {
                  "api",
                  "warp",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
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
