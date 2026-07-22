
import { Context } from './Context'


class GithubErrorError extends Error {

  isGithubErrorError = true

  sdk = 'GithubError'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  GithubErrorError
}

