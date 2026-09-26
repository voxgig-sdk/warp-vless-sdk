# WarpVless SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "WarpVless",
            "slug": "warp-vless",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://warp-vless.vercel.app",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "warp": {},
            },
        },
        "entity": {
      "warp": {
        "fields": [
          {
            "name": "amneziaMode",
            "title": "Amnezia Mode",
            "type": "`$STRING`",
            "short": "Amnezia VPN mode configuration",
          },
          {
            "name": "configs",
            "title": "Configs",
            "type": "`$ARRAY`",
            "short": "Array of configuration objects when multiple configs are returned",
          },
          {
            "name": "content",
            "title": "Content",
            "type": "`$STRING`",
            "short": "Base64 encoded WARP configuration content",
          },
          {
            "name": "deviceType",
            "title": "Device Type",
            "type": "`$STRING`",
            "short": "The type of device requesting the configuration",
          },
          {
            "name": "errorCode",
            "title": "Error Code",
            "type": "`$STRING`",
            "short": "Error code if an error occurred",
          },
          {
            "name": "message",
            "title": "Message",
            "type": "`$STRING`",
            "short": "Human-readable message or error description",
          },
          {
            "name": "selectedDns",
            "title": "Selected Dns",
            "type": "`$STRING`",
            "short": "DNS provider selection",
          },
          {
            "name": "selectedServices",
            "title": "Selected Services",
            "type": "`$ARRAY`",
            "short": "List of selected services to include in the configuration",
          },
          {
            "name": "siteMode",
            "title": "Site Mode",
            "type": "`$STRING`",
            "short": "The site mode for the WARP configuration",
          },
        ],
        "name": "warp",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/api/warp",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "warp",
                  },
                ],
                "parts": [
                  "api",
                  "warp",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
