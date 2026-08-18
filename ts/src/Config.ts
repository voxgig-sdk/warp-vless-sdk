
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


  main = {
    name: 'GithubError',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "type": "`$STRING`"
        },
        {
          "name": "configs",
          "type": "`$ARRAY`"
        },
        {
          "name": "content",
          "type": "`$STRING`"
        },
        {
          "name": "deviceType",
          "type": "`$STRING`"
        },
        {
          "name": "errorCode",
          "type": "`$STRING`"
        },
        {
          "name": "message",
          "type": "`$STRING`"
        },
        {
          "name": "selectedDns",
          "type": "`$STRING`"
        },
        {
          "name": "selectedServices",
          "type": "`$ARRAY`"
        },
        {
          "name": "siteMode",
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

