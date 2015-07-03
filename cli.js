#!/usr/bin/env node
'use strict'
var meow = require('meow')
var logSymbols = require('log-symbols')
var ghUsernameAvailable = require('./')

var cli = meow({
  help: [
    'Usage',
    '  $ gh-username-available username',
    '',
    'Examples',
    '  $ gh-username-available icyflame',
    '  ✖ Taken',
    '',
    '  $ gh-username-available harry-potter-1',
    '  ✔ Available',
    ''
  ].join('\n')
})

if (cli.input.length === 1) {
  ghUsernameAvailable(cli.input[0], function (err, value) {
    if (err) {
      console.log(require('util').inspect(err, { depth: null }))
      process.exit(1)
    }
    console.log(value ?
      logSymbols.success + ' Available' :
      logSymbols.error + ' Taken')
  })
}
