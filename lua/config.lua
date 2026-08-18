-- GithubError SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "GithubError",
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
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "configs",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "content",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "deviceType",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "errorCode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "message",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "selectedDns",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "selectedServices",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "siteMode",
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
