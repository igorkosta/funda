'use strict'

const { log, Response, HttpError } = require('shawerma')

module.exports.yourfunc = (event) => {
  const response = {
    'message': 'You find me in the lib folder'
  }
  log.info(response)
  return Response(200, response)
}
