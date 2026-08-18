# GithubError SDK configuration


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
            "name": "GithubError",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
            "type": "`$STRING`",
          },
          {
            "name": "configs",
            "type": "`$ARRAY`",
          },
          {
            "name": "content",
            "type": "`$STRING`",
          },
          {
            "name": "deviceType",
            "type": "`$STRING`",
          },
          {
            "name": "errorCode",
            "type": "`$STRING`",
          },
          {
            "name": "message",
            "type": "`$STRING`",
          },
          {
            "name": "selectedDns",
            "type": "`$STRING`",
          },
          {
            "name": "selectedServices",
            "type": "`$ARRAY`",
          },
          {
            "name": "siteMode",
            "type": "`$STRING`",
          },
        ],
        "name": "warp",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/warp",
                "parts": [
                  "api",
                  "warp",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
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
