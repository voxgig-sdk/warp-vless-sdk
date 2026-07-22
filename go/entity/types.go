// Typed models for the GithubError SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Warp is the typed data model for the warp entity.
type Warp struct {
	AmneziaMode *string `json:"amnezia_mode,omitempty"`
	Config *[]any `json:"config,omitempty"`
	Content *string `json:"content,omitempty"`
	DeviceType *string `json:"device_type,omitempty"`
	ErrorCode *string `json:"error_code,omitempty"`
	Message *string `json:"message,omitempty"`
	SelectedDn *string `json:"selected_dn,omitempty"`
	SelectedService *[]any `json:"selected_service,omitempty"`
	SiteMode *string `json:"site_mode,omitempty"`
}

// WarpCreateData is the typed request payload for Warp.CreateTyped.
type WarpCreateData struct {
	AmneziaMode *string `json:"amnezia_mode,omitempty"`
	Config *[]any `json:"config,omitempty"`
	Content *string `json:"content,omitempty"`
	DeviceType *string `json:"device_type,omitempty"`
	ErrorCode *string `json:"error_code,omitempty"`
	Message *string `json:"message,omitempty"`
	SelectedDn *string `json:"selected_dn,omitempty"`
	SelectedService *[]any `json:"selected_service,omitempty"`
	SiteMode *string `json:"site_mode,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
