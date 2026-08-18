package voxgiggithuberrorsdk

import (
	"github.com/voxgig-sdk/github-error-sdk/go/core"
	"github.com/voxgig-sdk/github-error-sdk/go/entity"
	"github.com/voxgig-sdk/github-error-sdk/go/feature"
	_ "github.com/voxgig-sdk/github-error-sdk/go/utility"
)

// Type aliases preserve external API.
type GithubErrorSDK = core.GithubErrorSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type GithubErrorEntity = core.GithubErrorEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type GithubErrorError = core.GithubErrorError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewWarpEntityFunc = func(client *core.GithubErrorSDK, entopts map[string]any) core.GithubErrorEntity {
		return entity.NewWarpEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewGithubErrorSDK = core.NewGithubErrorSDK
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
// instead of `sdk.NewGithubErrorSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *GithubErrorSDK  { return NewGithubErrorSDK(nil) }
func Test() *GithubErrorSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
