/* global it */
'use strict'
var assert = require('assert')
var ghUsernameAvailable = require('./')

it('should work', function () {
  ghUsernameAvailable('icyflame', function (err, value) {
    if (err) {
      console.log(require('util').inspect(err, { depth: null }))
      return undefined
    }
    assert.strictEqual(value, false)
  })
  ghUsernameAvailable('harry-potter-1', function (err, value) {
    if (err) {
      console.log(require('util').inspect(err, { depth: null }))
      return undefined
    }
    assert.strictEqual(value, true)
  })
})
