-- WarpVless SDK exists test

local sdk = require("warp-vless_sdk")

describe("WarpVlessSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
