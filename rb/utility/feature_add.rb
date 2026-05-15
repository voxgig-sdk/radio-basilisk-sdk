# RadioBasilisk SDK utility: feature_add
module RadioBasiliskUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
