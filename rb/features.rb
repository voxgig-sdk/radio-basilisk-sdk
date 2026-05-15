# RadioBasilisk SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module RadioBasiliskFeatures
  def self.make_feature(name)
    case name
    when "base"
      RadioBasiliskBaseFeature.new
    when "test"
      RadioBasiliskTestFeature.new
    else
      RadioBasiliskBaseFeature.new
    end
  end
end
