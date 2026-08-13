// Typed models for the GithubError SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Warp {
  amneziaMode?: string
  configs?: any[]
  content?: string
  deviceType?: string
  errorCode?: string
  message?: string
  selectedDns?: string
  selectedServices?: any[]
  siteMode?: string
}

export interface WarpCreateData {
  amneziaMode?: string
  configs?: any[]
  content?: string
  deviceType?: string
  errorCode?: string
  message?: string
  selectedDns?: string
  selectedServices?: any[]
  siteMode?: string
}

