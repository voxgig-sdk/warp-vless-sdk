<?php
declare(strict_types=1);

// GithubError SDK exists test

require_once __DIR__ . '/../githuberror_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = GithubErrorSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
