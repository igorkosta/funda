'use strict'

const { createHandler } = require('shawerma')
const yourfunc = require('./lib/yourfunc')

module.exports = {
  yourfunc: createHandler(yourfunc)
}
