-- Typed models for the RadioBasilisk SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Music
---@field album? string
---@field artist string
---@field coverImage? string
---@field duration? number
---@field id? string
---@field playedAt string
---@field title string

---@class MusicListMatch
---@field album? string
---@field artist? string
---@field coverImage? string
---@field duration? number
---@field id? string
---@field playedAt? string
---@field title? string

local M = {}

return M
