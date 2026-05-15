<?php
declare(strict_types=1);

// RadioBasilisk SDK utility: feature_add

class RadioBasiliskFeatureAdd
{
    public static function call(RadioBasiliskContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
