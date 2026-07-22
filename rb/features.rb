# GithubError SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module GithubErrorFeatures
  def self.make_feature(name)
    case name
    when "base"
      GithubErrorBaseFeature.new
    when "test"
      GithubErrorTestFeature.new
    else
      GithubErrorBaseFeature.new
    end
  end
end
