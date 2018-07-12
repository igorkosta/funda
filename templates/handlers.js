'use strict'

const { createHandler } = require('shawerma')
const test = require('./lib/test')

module.exports = {
  test: createHandler(test)
}
