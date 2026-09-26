# WarpVless SDK feature factory

from warpvless_sdk.feature.base_feature import WarpVlessBaseFeature
from warpvless_sdk.feature.ratelimit_feature import WarpVlessRatelimitFeature
from warpvless_sdk.feature.retry_feature import WarpVlessRetryFeature
from warpvless_sdk.feature.test_feature import WarpVlessTestFeature
from warpvless_sdk.feature.timeout_feature import WarpVlessTimeoutFeature


_FEATURES = {
    "base": lambda: WarpVlessBaseFeature(),
    "ratelimit": lambda: WarpVlessRatelimitFeature(),
    "retry": lambda: WarpVlessRetryFeature(),
    "test": lambda: WarpVlessTestFeature(),
    "timeout": lambda: WarpVlessTimeoutFeature(),
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
