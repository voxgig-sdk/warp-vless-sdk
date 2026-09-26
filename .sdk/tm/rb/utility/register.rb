# WarpVless SDK utility registration
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
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

WarpVlessUtility.registrar = ->(u) {
  u.clean = WarpVlessUtilities::Clean
  u.done = WarpVlessUtilities::Done
  u.make_error = WarpVlessUtilities::MakeError
  u.feature_add = WarpVlessUtilities::FeatureAdd
  u.feature_hook = WarpVlessUtilities::FeatureHook
  u.feature_init = WarpVlessUtilities::FeatureInit
  u.fetcher = WarpVlessUtilities::Fetcher
  u.make_fetch_def = WarpVlessUtilities::MakeFetchDef
  u.make_context = WarpVlessUtilities::MakeContext
  u.make_options = WarpVlessUtilities::MakeOptions
  u.make_request = WarpVlessUtilities::MakeRequest
  u.make_response = WarpVlessUtilities::MakeResponse
  u.make_result = WarpVlessUtilities::MakeResult
  u.make_point = WarpVlessUtilities::MakePoint
  u.make_spec = WarpVlessUtilities::MakeSpec
  u.make_url = WarpVlessUtilities::MakeUrl
  u.param = WarpVlessUtilities::Param
  u.prepare_auth = WarpVlessUtilities::PrepareAuth
  u.prepare_body = WarpVlessUtilities::PrepareBody
  u.prepare_headers = WarpVlessUtilities::PrepareHeaders
  u.prepare_method = WarpVlessUtilities::PrepareMethod
  u.prepare_params = WarpVlessUtilities::PrepareParams
  u.prepare_path = WarpVlessUtilities::PreparePath
  u.prepare_query = WarpVlessUtilities::PrepareQuery
  u.graphql_body = WarpVlessUtilities::GraphqlBody
  u.graphql_errors = WarpVlessUtilities::GraphqlErrors
  u.result_basic = WarpVlessUtilities::ResultBasic
  u.result_body = WarpVlessUtilities::ResultBody
  u.result_headers = WarpVlessUtilities::ResultHeaders
  u.transform_request = WarpVlessUtilities::TransformRequest
  u.transform_response = WarpVlessUtilities::TransformResponse
}
