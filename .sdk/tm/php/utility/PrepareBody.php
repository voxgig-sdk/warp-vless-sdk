<?php
declare(strict_types=1);

// GithubError SDK utility: prepare_body

class GithubErrorPrepareBody
{
    public static function call(GithubErrorContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
