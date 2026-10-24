# RadioBasilisk SDK utility: prepare_body
require_relative 'media'
module RadioBasiliskUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return RadioBasiliskUtilities.raw_body(ctx.reqdata) if RadioBasiliskUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
