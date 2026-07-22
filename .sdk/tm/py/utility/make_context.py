# GithubError SDK utility: make_context

from core.context import GithubErrorContext


def make_context_util(ctxmap, basectx):
    return GithubErrorContext(ctxmap, basectx)
