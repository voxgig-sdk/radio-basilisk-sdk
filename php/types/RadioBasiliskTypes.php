<?php
declare(strict_types=1);

// Typed models for the RadioBasilisk SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Music entity data model. */
class Music
{
    public ?string $album = null;
    public string $artist;
    public ?string $cover_image = null;
    public ?int $duration = null;
    public ?string $id = null;
    public string $played_at;
    public string $title;
}

/** Request payload for Music#list. */
class MusicListMatch
{
    public ?string $album = null;
    public ?string $artist = null;
    public ?string $cover_image = null;
    public ?int $duration = null;
    public ?string $id = null;
    public ?string $played_at = null;
    public ?string $title = null;
}

