
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { GithubErrorSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await GithubErrorSDK.test()
    equal(null !== testsdk, true)
  })

})
