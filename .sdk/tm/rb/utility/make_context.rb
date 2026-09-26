# WarpVless SDK utility: make_context
require_relative '../core/context'
module WarpVlessUtilities
  MakeContext = ->(ctxmap, basectx) {
    WarpVlessContext.new(ctxmap, basectx)
  }
end
