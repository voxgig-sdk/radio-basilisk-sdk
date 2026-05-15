package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewMusicEntityFunc func(client *RadioBasiliskSDK, entopts map[string]any) RadioBasiliskEntity

