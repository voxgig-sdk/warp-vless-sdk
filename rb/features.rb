# WarpVless SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module WarpVlessFeatures
  def self.make_feature(name)
    case name
    when "base"
      WarpVlessBaseFeature.new
    when "ratelimit"
      WarpVlessRatelimitFeature.new
    when "retry"
      WarpVlessRetryFeature.new
    when "test"
      WarpVlessTestFeature.new
    when "timeout"
      WarpVlessTimeoutFeature.new
    else
      WarpVlessBaseFeature.new
    end
  end
end
