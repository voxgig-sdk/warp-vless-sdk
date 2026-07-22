package core

type GithubErrorError struct {
	IsGithubErrorError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewGithubErrorError(code string, msg string, ctx *Context) *GithubErrorError {
	return &GithubErrorError{
		IsGithubErrorError: true,
		Sdk:              "GithubError",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *GithubErrorError) Error() string {
	return e.Msg
}
