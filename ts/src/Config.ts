
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'GithubError',
        slug: "github-error",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
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
          "short": "Amnezia VPN mode configuration",
          "type": "`$STRING`"
        },
        {
          "name": "configs",
          "short": "Array of configuration objects when multiple configs are returned",
          "type": "`$ARRAY`"
        },
        {
          "name": "content",
          "short": "Base64 encoded WARP configuration content",
          "type": "`$STRING`"
        },
        {
          "name": "deviceType",
          "short": "The type of device requesting the configuration",
          "type": "`$STRING`"
        },
        {
          "name": "errorCode",
          "short": "Error code if an error occurred",
          "type": "`$STRING`"
        },
        {
          "name": "message",
          "short": "Human-readable message or error description",
          "type": "`$STRING`"
        },
        {
          "name": "selectedDns",
          "short": "DNS provider selection",
          "type": "`$STRING`"
        },
        {
          "name": "selectedServices",
          "short": "List of selected services to include in the configuration",
          "type": "`$ARRAY`"
        },
        {
          "name": "siteMode",
          "short": "The site mode for the WARP configuration",
          "type": "`$STRING`"
        }
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
                "warp"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
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
  config
}

