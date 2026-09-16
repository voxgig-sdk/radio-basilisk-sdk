# RadioBasilisk SDK feature factory

from radiobasilisk_sdk.feature.base_feature import RadioBasiliskBaseFeature
from radiobasilisk_sdk.feature.ratelimit_feature import RadioBasiliskRatelimitFeature
from radiobasilisk_sdk.feature.retry_feature import RadioBasiliskRetryFeature
from radiobasilisk_sdk.feature.test_feature import RadioBasiliskTestFeature
from radiobasilisk_sdk.feature.timeout_feature import RadioBasiliskTimeoutFeature


_FEATURES = {
    "base": lambda: RadioBasiliskBaseFeature(),
    "ratelimit": lambda: RadioBasiliskRatelimitFeature(),
    "retry": lambda: RadioBasiliskRetryFeature(),
    "test": lambda: RadioBasiliskTestFeature(),
    "timeout": lambda: RadioBasiliskTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
