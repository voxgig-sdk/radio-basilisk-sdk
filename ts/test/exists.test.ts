
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { RadioBasiliskSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = RadioBasiliskSDK.test()
    equal(testsdk instanceof RadioBasiliskSDK, true,
      'RadioBasiliskSDK.test() must return a client synchronously')
  })

})
