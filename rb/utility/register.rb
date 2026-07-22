# GithubError SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

GithubErrorUtility.registrar = ->(u) {
  u.clean = GithubErrorUtilities::Clean
  u.done = GithubErrorUtilities::Done
  u.make_error = GithubErrorUtilities::MakeError
  u.feature_add = GithubErrorUtilities::FeatureAdd
  u.feature_hook = GithubErrorUtilities::FeatureHook
  u.feature_init = GithubErrorUtilities::FeatureInit
  u.fetcher = GithubErrorUtilities::Fetcher
  u.make_fetch_def = GithubErrorUtilities::MakeFetchDef
  u.make_context = GithubErrorUtilities::MakeContext
  u.make_options = GithubErrorUtilities::MakeOptions
  u.make_request = GithubErrorUtilities::MakeRequest
  u.make_response = GithubErrorUtilities::MakeResponse
  u.make_result = GithubErrorUtilities::MakeResult
  u.make_point = GithubErrorUtilities::MakePoint
  u.make_spec = GithubErrorUtilities::MakeSpec
  u.make_url = GithubErrorUtilities::MakeUrl
  u.param = GithubErrorUtilities::Param
  u.prepare_auth = GithubErrorUtilities::PrepareAuth
  u.prepare_body = GithubErrorUtilities::PrepareBody
  u.prepare_headers = GithubErrorUtilities::PrepareHeaders
  u.prepare_method = GithubErrorUtilities::PrepareMethod
  u.prepare_params = GithubErrorUtilities::PrepareParams
  u.prepare_path = GithubErrorUtilities::PreparePath
  u.prepare_query = GithubErrorUtilities::PrepareQuery
  u.result_basic = GithubErrorUtilities::ResultBasic
  u.result_body = GithubErrorUtilities::ResultBody
  u.result_headers = GithubErrorUtilities::ResultHeaders
  u.transform_request = GithubErrorUtilities::TransformRequest
  u.transform_response = GithubErrorUtilities::TransformResponse
}
