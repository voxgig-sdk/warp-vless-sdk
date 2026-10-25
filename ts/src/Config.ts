
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'WarpVless',
        slug: "warp-vless",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
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
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "now": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://warp-vless.vercel.app",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        warp: {
        },
  
    }
  }


  entity = {
    "warp": {
      "fields": [
        {
          "name": "amneziaMode",
          "title": "Amnezia Mode",
          "type": "`$STRING`",
          "short": "Amnezia VPN mode configuration"
        },
        {
          "name": "configs",
          "title": "Configs",
          "type": "`$ARRAY`",
          "short": "Array of configuration objects when multiple configs are returned"
        },
        {
          "name": "content",
          "title": "Content",
          "type": "`$STRING`",
          "short": "Base64 encoded WARP configuration content"
        },
        {
          "name": "deviceType",
          "title": "Device Type",
          "type": "`$STRING`",
          "short": "The type of device requesting the configuration"
        },
        {
          "name": "errorCode",
          "title": "Error Code",
          "type": "`$STRING`",
          "short": "Error code if an error occurred"
        },
        {
          "name": "message",
          "title": "Message",
          "type": "`$STRING`",
          "short": "Human-readable message or error description"
        },
        {
          "name": "selectedDns",
          "title": "Selected Dns",
          "type": "`$STRING`",
          "short": "DNS provider selection"
        },
        {
          "name": "selectedServices",
          "title": "Selected Services",
          "type": "`$ARRAY`",
          "short": "List of selected services to include in the configuration"
        },
        {
          "name": "siteMode",
          "title": "Site Mode",
          "type": "`$STRING`",
          "short": "The site mode for the WARP configuration"
        }
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
                  "lit": "api"
                },
                {
                  "lit": "warp"
                }
              ],
              "parts": [
                "api",
                "warp"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {},
              "body": {
                "alternatives": [
                  {
                    "fields": [
                      {
                        "name": "amneziaMode"
                      },
                      {
                        "name": "deviceType"
                      },
                      {
                        "name": "selectedDns"
                      },
                      {
                        "name": "selectedServices"
                      },
                      {
                        "name": "siteMode"
                      }
                    ],
                    "kind": "form",
                    "media": "application/x-www-form-urlencoded"
                  }
                ],
                "kind": "json",
                "media": "application/json"
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

