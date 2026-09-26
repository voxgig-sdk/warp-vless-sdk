<?php
declare(strict_types=1);

// WarpVless SDK utility: result_headers

class WarpVlessResultHeaders
{
    public static function call(WarpVlessContext $ctx): ?WarpVlessResult
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
