# ProjectName SDK exists test

import pytest
from githuberror_sdk import GithubErrorSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = GithubErrorSDK.test(None, None)
        assert testsdk is not None
