-- WarpVless SDK error

local WarpVlessError = {}
WarpVlessError.__index = WarpVlessError


function WarpVlessError.new(code, msg, ctx)
  local self = setmetatable({}, WarpVlessError)
  self.is_sdk_error = true
  self.sdk = "WarpVless"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function WarpVlessError:error()
  return self.msg
end


function WarpVlessError:__tostring()
  return self.msg
end


return WarpVlessError
