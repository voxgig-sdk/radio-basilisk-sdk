<?php
declare(strict_types=1);

// RadioBasilisk SDK utility: prepare_body

class RadioBasiliskPrepareBody
{
    public static function call(RadioBasiliskContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
