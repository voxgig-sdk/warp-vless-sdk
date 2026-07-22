<?php
declare(strict_types=1);

// GithubError SDK base feature

class GithubErrorBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(GithubErrorContext $ctx, array $options): void {}
    public function PostConstruct(GithubErrorContext $ctx): void {}
    public function PostConstructEntity(GithubErrorContext $ctx): void {}
    public function SetData(GithubErrorContext $ctx): void {}
    public function GetData(GithubErrorContext $ctx): void {}
    public function GetMatch(GithubErrorContext $ctx): void {}
    public function SetMatch(GithubErrorContext $ctx): void {}
    public function PrePoint(GithubErrorContext $ctx): void {}
    public function PreSpec(GithubErrorContext $ctx): void {}
    public function PreRequest(GithubErrorContext $ctx): void {}
    public function PreResponse(GithubErrorContext $ctx): void {}
    public function PreResult(GithubErrorContext $ctx): void {}
    public function PreDone(GithubErrorContext $ctx): void {}
    public function PreUnexpected(GithubErrorContext $ctx): void {}
}
