<?php
declare(strict_types=1);

// GithubError SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class GithubErrorFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new GithubErrorBaseFeature();
            case "test":
                return new GithubErrorTestFeature();
            default:
                return new GithubErrorBaseFeature();
        }
    }
}
