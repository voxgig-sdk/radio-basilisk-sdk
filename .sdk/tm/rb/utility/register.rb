# RadioBasilisk SDK utility registration
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

RadioBasiliskUtility.registrar = ->(u) {
  u.clean = RadioBasiliskUtilities::Clean
  u.done = RadioBasiliskUtilities::Done
  u.make_error = RadioBasiliskUtilities::MakeError
  u.feature_add = RadioBasiliskUtilities::FeatureAdd
  u.feature_hook = RadioBasiliskUtilities::FeatureHook
  u.feature_init = RadioBasiliskUtilities::FeatureInit
  u.fetcher = RadioBasiliskUtilities::Fetcher
  u.make_fetch_def = RadioBasiliskUtilities::MakeFetchDef
  u.make_context = RadioBasiliskUtilities::MakeContext
  u.make_options = RadioBasiliskUtilities::MakeOptions
  u.make_request = RadioBasiliskUtilities::MakeRequest
  u.make_response = RadioBasiliskUtilities::MakeResponse
  u.make_result = RadioBasiliskUtilities::MakeResult
  u.make_point = RadioBasiliskUtilities::MakePoint
  u.make_spec = RadioBasiliskUtilities::MakeSpec
  u.make_url = RadioBasiliskUtilities::MakeUrl
  u.param = RadioBasiliskUtilities::Param
  u.prepare_auth = RadioBasiliskUtilities::PrepareAuth
  u.prepare_body = RadioBasiliskUtilities::PrepareBody
  u.prepare_headers = RadioBasiliskUtilities::PrepareHeaders
  u.prepare_method = RadioBasiliskUtilities::PrepareMethod
  u.prepare_params = RadioBasiliskUtilities::PrepareParams
  u.prepare_path = RadioBasiliskUtilities::PreparePath
  u.prepare_query = RadioBasiliskUtilities::PrepareQuery
  u.result_basic = RadioBasiliskUtilities::ResultBasic
  u.result_body = RadioBasiliskUtilities::ResultBody
  u.result_headers = RadioBasiliskUtilities::ResultHeaders
  u.transform_request = RadioBasiliskUtilities::TransformRequest
  u.transform_response = RadioBasiliskUtilities::TransformResponse
}
