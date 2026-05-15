<?php
declare(strict_types=1);

// RadioBasilisk SDK utility: result_body

class RadioBasiliskResultBody
{
    public static function call(RadioBasiliskContext $ctx): ?RadioBasiliskResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
