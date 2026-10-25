-- Typed models for the WarpVless SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Warp
---@field amneziaMode? string
---@field configs? table
---@field content? string
---@field deviceType? string
---@field errorCode? string
---@field message? string
---@field selectedDns? string
---@field selectedServices? table
---@field siteMode? string

---@class WarpCreateData
---@field amneziaMode? string
---@field deviceType? string
---@field selectedDns? string
---@field selectedServices? table
---@field siteMode? string

local M = {}

return M
