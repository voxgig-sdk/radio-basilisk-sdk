package core

type RadioBasiliskError struct {
	IsRadioBasiliskError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewRadioBasiliskError(code string, msg string, ctx *Context) *RadioBasiliskError {
	return &RadioBasiliskError{
		IsRadioBasiliskError: true,
		Sdk:              "RadioBasilisk",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *RadioBasiliskError) Error() string {
	return e.Msg
}
