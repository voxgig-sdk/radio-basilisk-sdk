package core

import "encoding/json"

type RadioBasiliskError struct {
	IsRadioBasiliskError bool
	Sdk                string
	Code               string
	Msg                string
	// Reachable for a debugger, invisible to a serialiser: the context holds
	// the live spec and options, and an error is what gets logged.
	Ctx    *Context `json:"-"`
	Result any
	Spec   any
}

func NewRadioBasiliskError(code string, msg string, ctx *Context) *RadioBasiliskError {
	return &RadioBasiliskError{
		IsRadioBasiliskError: true,
		Sdk:                "RadioBasilisk",
		Code:               code,
		Msg:                msg,
		Ctx:                ctx,
	}
}

func (e *RadioBasiliskError) Error() string {
	return e.Msg
}

// What makeError attached is already cleaned; the context is not part of
// the record.
func (e *RadioBasiliskError) Record() map[string]any {
	return map[string]any{
		"sdk":     e.Sdk,
		"code":    e.Code,
		"message": e.Msg,
		"result":  e.Result,
		"spec":    e.Spec,
	}
}

func (e *RadioBasiliskError) MarshalJSON() ([]byte, error) {
	return json.Marshal(e.Record())
}
