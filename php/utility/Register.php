<?php
declare(strict_types=1);

// RadioBasilisk SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

RadioBasiliskUtility::setRegistrar(function (RadioBasiliskUtility $u): void {
    $u->clean = [RadioBasiliskClean::class, 'call'];
    $u->done = [RadioBasiliskDone::class, 'call'];
    $u->make_error = [RadioBasiliskMakeError::class, 'call'];
    $u->feature_add = [RadioBasiliskFeatureAdd::class, 'call'];
    $u->feature_hook = [RadioBasiliskFeatureHook::class, 'call'];
    $u->feature_init = [RadioBasiliskFeatureInit::class, 'call'];
    $u->fetcher = [RadioBasiliskFetcher::class, 'call'];
    $u->make_fetch_def = [RadioBasiliskMakeFetchDef::class, 'call'];
    $u->make_context = [RadioBasiliskMakeContext::class, 'call'];
    $u->make_options = [RadioBasiliskMakeOptions::class, 'call'];
    $u->make_request = [RadioBasiliskMakeRequest::class, 'call'];
    $u->make_response = [RadioBasiliskMakeResponse::class, 'call'];
    $u->make_result = [RadioBasiliskMakeResult::class, 'call'];
    $u->make_point = [RadioBasiliskMakePoint::class, 'call'];
    $u->make_spec = [RadioBasiliskMakeSpec::class, 'call'];
    $u->make_url = [RadioBasiliskMakeUrl::class, 'call'];
    $u->param = [RadioBasiliskParam::class, 'call'];
    $u->prepare_auth = [RadioBasiliskPrepareAuth::class, 'call'];
    $u->prepare_body = [RadioBasiliskPrepareBody::class, 'call'];
    $u->prepare_headers = [RadioBasiliskPrepareHeaders::class, 'call'];
    $u->prepare_method = [RadioBasiliskPrepareMethod::class, 'call'];
    $u->prepare_params = [RadioBasiliskPrepareParams::class, 'call'];
    $u->prepare_path = [RadioBasiliskPreparePath::class, 'call'];
    $u->prepare_query = [RadioBasiliskPrepareQuery::class, 'call'];
    $u->result_basic = [RadioBasiliskResultBasic::class, 'call'];
    $u->result_body = [RadioBasiliskResultBody::class, 'call'];
    $u->result_headers = [RadioBasiliskResultHeaders::class, 'call'];
    $u->transform_request = [RadioBasiliskTransformRequest::class, 'call'];
    $u->transform_response = [RadioBasiliskTransformResponse::class, 'call'];
});
