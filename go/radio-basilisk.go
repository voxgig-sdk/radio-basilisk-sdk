package voxgigradiobasilisksdk

import (
	"github.com/voxgig-sdk/radio-basilisk-sdk/go/core"
	"github.com/voxgig-sdk/radio-basilisk-sdk/go/entity"
	"github.com/voxgig-sdk/radio-basilisk-sdk/go/feature"
	_ "github.com/voxgig-sdk/radio-basilisk-sdk/go/utility"
)

// Type aliases preserve external API.
type RadioBasiliskSDK = core.RadioBasiliskSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type RadioBasiliskEntity = core.RadioBasiliskEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type RadioBasiliskError = core.RadioBasiliskError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewMusicEntityFunc = func(client *core.RadioBasiliskSDK, entopts map[string]any) core.RadioBasiliskEntity {
		return entity.NewMusicEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewRadioBasiliskSDK = core.NewRadioBasiliskSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
