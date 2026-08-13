# GithubError SDK utility: make_context

from projectname_sdk.core.context import GithubErrorContext


def make_context_util(ctxmap, basectx):
    return GithubErrorContext(ctxmap, basectx)
