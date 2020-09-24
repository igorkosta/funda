'use strict'

const { createHandler } = require('shawerma')
const yourfunc = require('./lib/yourfunc')

// don't set cors: false
// if you want cors to be enabled
const options = {
  cors: false
}

module.exports = {
  yourfunc: createHandler(yourfunc, options)
}
