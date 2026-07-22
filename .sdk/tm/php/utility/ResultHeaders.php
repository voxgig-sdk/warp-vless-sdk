<?php
declare(strict_types=1);

// GithubError SDK utility: result_headers

class GithubErrorResultHeaders
{
    public static function call(GithubErrorContext $ctx): ?GithubErrorResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
