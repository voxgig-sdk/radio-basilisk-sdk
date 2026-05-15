<?php
declare(strict_types=1);

// RadioBasilisk SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class RadioBasiliskMakeContext
{
    public static function call(array $ctxmap, ?RadioBasiliskContext $basectx): RadioBasiliskContext
    {
        return new RadioBasiliskContext($ctxmap, $basectx);
    }
}
