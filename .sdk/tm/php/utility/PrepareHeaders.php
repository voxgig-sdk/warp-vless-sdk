<?php
declare(strict_types=1);

// GithubError SDK utility: prepare_headers

class GithubErrorPrepareHeaders
{
    public static function call(GithubErrorContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
