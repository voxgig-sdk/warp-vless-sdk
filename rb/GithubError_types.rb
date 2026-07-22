# frozen_string_literal: true

# Typed models for the GithubError SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Warp entity data model.
#
# @!attribute [rw] amnezia_mode
#   @return [String, nil]
#
# @!attribute [rw] config
#   @return [Array, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] device_type
#   @return [String, nil]
#
# @!attribute [rw] error_code
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] selected_dn
#   @return [String, nil]
#
# @!attribute [rw] selected_service
#   @return [Array, nil]
#
# @!attribute [rw] site_mode
#   @return [String, nil]
Warp = Struct.new(
  :amnezia_mode,
  :config,
  :content,
  :device_type,
  :error_code,
  :message,
  :selected_dn,
  :selected_service,
  :site_mode,
  keyword_init: true
)

# Request payload for Warp#create.
#
# @!attribute [rw] amnezia_mode
#   @return [String, nil]
#
# @!attribute [rw] config
#   @return [Array, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] device_type
#   @return [String, nil]
#
# @!attribute [rw] error_code
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] selected_dn
#   @return [String, nil]
#
# @!attribute [rw] selected_service
#   @return [Array, nil]
#
# @!attribute [rw] site_mode
#   @return [String, nil]
WarpCreateData = Struct.new(
  :amnezia_mode,
  :config,
  :content,
  :device_type,
  :error_code,
  :message,
  :selected_dn,
  :selected_service,
  :site_mode,
  keyword_init: true
)

