-- WarpVless SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "WarpVless",
      slug = "warp-vless",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
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
            ["title"] = "Amnezia Mode",
            ["type"] = "`$STRING`",
            ["short"] = "Amnezia VPN mode configuration",
          },
          {
            ["name"] = "configs",
            ["title"] = "Configs",
            ["type"] = "`$ARRAY`",
            ["short"] = "Array of configuration objects when multiple configs are returned",
          },
          {
            ["name"] = "content",
            ["title"] = "Content",
            ["type"] = "`$STRING`",
            ["short"] = "Base64 encoded WARP configuration content",
          },
          {
            ["name"] = "deviceType",
            ["title"] = "Device Type",
            ["type"] = "`$STRING`",
            ["short"] = "The type of device requesting the configuration",
          },
          {
            ["name"] = "errorCode",
            ["title"] = "Error Code",
            ["type"] = "`$STRING`",
            ["short"] = "Error code if an error occurred",
          },
          {
            ["name"] = "message",
            ["title"] = "Message",
            ["type"] = "`$STRING`",
            ["short"] = "Human-readable message or error description",
          },
          {
            ["name"] = "selectedDns",
            ["title"] = "Selected Dns",
            ["type"] = "`$STRING`",
            ["short"] = "DNS provider selection",
          },
          {
            ["name"] = "selectedServices",
            ["title"] = "Selected Services",
            ["type"] = "`$ARRAY`",
            ["short"] = "List of selected services to include in the configuration",
          },
          {
            ["name"] = "siteMode",
            ["title"] = "Site Mode",
            ["type"] = "`$STRING`",
            ["short"] = "The site mode for the WARP configuration",
          },
        },
        ["name"] = "warp",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/warp",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "warp",
                  },
                },
                ["parts"] = {
                  "api",
                  "warp",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
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
