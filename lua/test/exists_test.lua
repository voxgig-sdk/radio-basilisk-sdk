-- ProjectName SDK exists test

local sdk = require("radio-basilisk_sdk")

describe("RadioBasiliskSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
