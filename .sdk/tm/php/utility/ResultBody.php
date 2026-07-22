<?php
declare(strict_types=1);

// GithubError SDK utility: result_body

class GithubErrorResultBody
{
    public static function call(GithubErrorContext $ctx): ?GithubErrorResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
