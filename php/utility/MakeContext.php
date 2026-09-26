<?php
declare(strict_types=1);

// WarpVless SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class WarpVlessMakeContext
{
    public static function call(array $ctxmap, ?WarpVlessContext $basectx): WarpVlessContext
    {
        return new WarpVlessContext($ctxmap, $basectx);
    }
}
