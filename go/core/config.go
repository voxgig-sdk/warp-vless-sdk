package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "GithubError",
			"slug": "github-error",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://warp-vless.vercel.app",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"warp": map[string]any{},
			},
		},
		"entity": map[string]any{
			"warp": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "amneziaMode",
						"short": "Amnezia VPN mode configuration",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "configs",
						"short": "Array of configuration objects when multiple configs are returned",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "content",
						"short": "Base64 encoded WARP configuration content",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "deviceType",
						"short": "The type of device requesting the configuration",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "errorCode",
						"short": "Error code if an error occurred",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "message",
						"short": "Human-readable message or error description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "selectedDns",
						"short": "DNS provider selection",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "selectedServices",
						"short": "List of selected services to include in the configuration",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "siteMode",
						"short": "The site mode for the WARP configuration",
						"type": "`$STRING`",
					},
				},
				"name": "warp",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/warp",
								"parts": []any{
									"api",
									"warp",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
