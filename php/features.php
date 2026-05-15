<?php
declare(strict_types=1);

// RadioBasilisk SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class RadioBasiliskFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new RadioBasiliskBaseFeature();
            case "test":
                return new RadioBasiliskTestFeature();
            default:
                return new RadioBasiliskBaseFeature();
        }
    }
}
