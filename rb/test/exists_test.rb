# WarpVless SDK exists test

require "minitest/autorun"
require_relative "../WarpVless_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = WarpVlessSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
