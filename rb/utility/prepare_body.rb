# WarpVless SDK utility: prepare_body
require_relative 'media'
module WarpVlessUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return WarpVlessUtilities.raw_body(ctx.reqdata) if WarpVlessUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
