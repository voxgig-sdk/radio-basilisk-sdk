<?php
declare(strict_types=1);

// RadioBasilisk SDK utility: result_headers

class RadioBasiliskResultHeaders
{
    public static function call(RadioBasiliskContext $ctx): ?RadioBasiliskResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
