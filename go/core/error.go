package core

type WarpVlessError struct {
	IsWarpVlessError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewWarpVlessError(code string, msg string, ctx *Context) *WarpVlessError {
	return &WarpVlessError{
		IsWarpVlessError: true,
		Sdk:              "WarpVless",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *WarpVlessError) Error() string {
	return e.Msg
}
