package voxgigwarpvlesssdk

import (
	"github.com/voxgig-sdk/warp-vless-sdk/go/core"
	"github.com/voxgig-sdk/warp-vless-sdk/go/entity"
	"github.com/voxgig-sdk/warp-vless-sdk/go/feature"
	_ "github.com/voxgig-sdk/warp-vless-sdk/go/utility"
)

// Type aliases preserve external API.
type WarpVlessSDK = core.WarpVlessSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type WarpVlessEntity = core.WarpVlessEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type WarpVlessError = core.WarpVlessError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewWarpEntityFunc = func(client *core.WarpVlessSDK, entopts map[string]any) core.WarpVlessEntity {
		return entity.NewWarpEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewWarpVlessSDK = core.NewWarpVlessSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewWarpVlessSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *WarpVlessSDK  { return NewWarpVlessSDK(nil) }
func Test() *WarpVlessSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
