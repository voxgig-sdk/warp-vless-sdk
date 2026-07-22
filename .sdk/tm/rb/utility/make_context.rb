# GithubError SDK utility: make_context
require_relative '../core/context'
module GithubErrorUtilities
  MakeContext = ->(ctxmap, basectx) {
    GithubErrorContext.new(ctxmap, basectx)
  }
end
