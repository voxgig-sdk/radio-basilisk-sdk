# ProjectName SDK exists test

import pytest
from radiobasilisk_sdk import RadioBasiliskSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = RadioBasiliskSDK.test(None, None)
        assert testsdk is not None
