package = "voxgig-sdk-radio-basilisk"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/radio-basilisk-sdk.git"
}
description = {
  summary = "RadioBasilisk SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["radio-basilisk_sdk"] = "radio-basilisk_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
