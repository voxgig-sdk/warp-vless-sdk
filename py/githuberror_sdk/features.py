# GithubError SDK feature factory

from githuberror_sdk.feature.base_feature import GithubErrorBaseFeature
from githuberror_sdk.feature.test_feature import GithubErrorTestFeature


def _make_feature(name):
    features = {
        "base": lambda: GithubErrorBaseFeature(),
        "test": lambda: GithubErrorTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
