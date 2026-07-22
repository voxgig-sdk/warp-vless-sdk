<?php
declare(strict_types=1);

// GithubError SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class GithubErrorMakeContext
{
    public static function call(array $ctxmap, ?GithubErrorContext $basectx): GithubErrorContext
    {
        return new GithubErrorContext($ctxmap, $basectx);
    }
}
