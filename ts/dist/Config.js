"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'WarpVless',
        slug: "warp-vless",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
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
        retry: {
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
        test: {
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
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://warp-vless.vercel.app",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            warp: {},
        }
    };
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
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map