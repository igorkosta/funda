'use strict'

const { log, Response } = require('shawerma')

module.exports = (event) => {
  log.info(event)
  const response = {
    message: 'You find me in the lib folder'
  }
  log.info(response)
  return Response(200, response)
}
