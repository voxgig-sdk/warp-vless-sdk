# WarpVless SDK utility: make_context

from warpvless_sdk.core.context import WarpVlessContext


def make_context_util(ctxmap, basectx):
    return WarpVlessContext(ctxmap, basectx)
