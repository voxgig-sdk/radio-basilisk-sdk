# RadioBasilisk SDK utility: make_context
require_relative '../core/context'
module RadioBasiliskUtilities
  MakeContext = ->(ctxmap, basectx) {
    RadioBasiliskContext.new(ctxmap, basectx)
  }
end
