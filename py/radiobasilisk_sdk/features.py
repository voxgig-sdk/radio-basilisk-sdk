# RadioBasilisk SDK feature factory

from radiobasilisk_sdk.feature.base_feature import RadioBasiliskBaseFeature
from radiobasilisk_sdk.feature.test_feature import RadioBasiliskTestFeature


def _make_feature(name):
    features = {
        "base": lambda: RadioBasiliskBaseFeature(),
        "test": lambda: RadioBasiliskTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
