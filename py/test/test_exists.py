# WarpVless SDK exists test

import pytest
from warpvless_sdk import WarpVlessSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = WarpVlessSDK.test(None, None)
        assert testsdk is not None
