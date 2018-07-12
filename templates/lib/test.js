'use strict'

const { log, Response, HttpError } = require('shawerma')

module.exports = (event) => {
  const response = {
    'message': 'You find me in the lib folder'
  }
  return Response(200, response)
}
