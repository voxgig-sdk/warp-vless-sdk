
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { WarpVlessSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = WarpVlessSDK.test()
    equal(testsdk instanceof WarpVlessSDK, true,
      'WarpVlessSDK.test() must return a client synchronously')
  })

})
