<?php
declare(strict_types=1);

// Typed models for the GithubError SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Warp entity data model. */
class Warp
{
    public ?string $amnezia_mode = null;
    public ?array $config = null;
    public ?string $content = null;
    public ?string $device_type = null;
    public ?string $error_code = null;
    public ?string $message = null;
    public ?string $selected_dn = null;
    public ?array $selected_service = null;
    public ?string $site_mode = null;
}

/** Request payload for Warp#create. */
class WarpCreateData
{
    public ?string $amnezia_mode = null;
    public ?array $config = null;
    public ?string $content = null;
    public ?string $device_type = null;
    public ?string $error_code = null;
    public ?string $message = null;
    public ?string $selected_dn = null;
    public ?array $selected_service = null;
    public ?string $site_mode = null;
}

