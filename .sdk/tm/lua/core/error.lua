-- RadioBasilisk SDK error

local RadioBasiliskError = {}
RadioBasiliskError.__index = RadioBasiliskError


function RadioBasiliskError.new(code, msg, ctx)
  local self = setmetatable({}, RadioBasiliskError)
  self.is_sdk_error = true
  self.sdk = "RadioBasilisk"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function RadioBasiliskError:error()
  return self.msg
end


function RadioBasiliskError:__tostring()
  return self.msg
end


return RadioBasiliskError
