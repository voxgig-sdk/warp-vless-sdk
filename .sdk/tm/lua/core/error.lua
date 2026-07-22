-- GithubError SDK error

local GithubErrorError = {}
GithubErrorError.__index = GithubErrorError


function GithubErrorError.new(code, msg, ctx)
  local self = setmetatable({}, GithubErrorError)
  self.is_sdk_error = true
  self.sdk = "GithubError"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function GithubErrorError:error()
  return self.msg
end


function GithubErrorError:__tostring()
  return self.msg
end


return GithubErrorError
