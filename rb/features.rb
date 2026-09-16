# RadioBasilisk SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module RadioBasiliskFeatures
  def self.make_feature(name)
    case name
    when "base"
      RadioBasiliskBaseFeature.new
    when "ratelimit"
      RadioBasiliskRatelimitFeature.new
    when "retry"
      RadioBasiliskRetryFeature.new
    when "test"
      RadioBasiliskTestFeature.new
    when "timeout"
      RadioBasiliskTimeoutFeature.new
    else
      RadioBasiliskBaseFeature.new
    end
  end
end
