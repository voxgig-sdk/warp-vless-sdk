# frozen_string_literal: true

# Typed models for the WarpVless SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Warp entity data model.
#
# @!attribute [rw] amneziaMode
#   @return [String, nil]
#
# @!attribute [rw] configs
#   @return [Array, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] deviceType
#   @return [String, nil]
#
# @!attribute [rw] errorCode
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] selectedDns
#   @return [String, nil]
#
# @!attribute [rw] selectedServices
#   @return [Array, nil]
#
# @!attribute [rw] siteMode
#   @return [String, nil]
Warp = Struct.new(
  :amneziaMode,
  :configs,
  :content,
  :deviceType,
  :errorCode,
  :message,
  :selectedDns,
  :selectedServices,
  :siteMode,
  keyword_init: true
)

# Request payload for Warp#create.
#
# @!attribute [rw] amneziaMode
#   @return [String, nil]
#
# @!attribute [rw] configs
#   @return [Array, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] deviceType
#   @return [String, nil]
#
# @!attribute [rw] errorCode
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] selectedDns
#   @return [String, nil]
#
# @!attribute [rw] selectedServices
#   @return [Array, nil]
#
# @!attribute [rw] siteMode
#   @return [String, nil]
WarpCreateData = Struct.new(
  :amneziaMode,
  :configs,
  :content,
  :deviceType,
  :errorCode,
  :message,
  :selectedDns,
  :selectedServices,
  :siteMode,
  keyword_init: true
)

