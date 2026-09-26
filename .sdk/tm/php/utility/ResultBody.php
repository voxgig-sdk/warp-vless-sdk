<?php
declare(strict_types=1);

// WarpVless SDK utility: result_body

class WarpVlessResultBody
{
    public static function call(WarpVlessContext $ctx): ?WarpVlessResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
