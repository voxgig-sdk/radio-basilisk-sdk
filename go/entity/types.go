// Typed models for the RadioBasilisk SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Music is the typed data model for the music entity.
type Music struct {
	Album *string `json:"album,omitempty"`
	Artist string `json:"artist"`
	CoverImage *string `json:"cover_image,omitempty"`
	Duration *int `json:"duration,omitempty"`
	Id *string `json:"id,omitempty"`
	PlayedAt string `json:"played_at"`
	Title string `json:"title"`
}

// MusicListMatch mirrors the music fields as an all-optional match
// filter (Go analog of Partial<Music>).
type MusicListMatch struct {
	Album *string `json:"album,omitempty"`
	Artist *string `json:"artist,omitempty"`
	CoverImage *string `json:"cover_image,omitempty"`
	Duration *int `json:"duration,omitempty"`
	Id *string `json:"id,omitempty"`
	PlayedAt *string `json:"played_at,omitempty"`
	Title *string `json:"title,omitempty"`
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
