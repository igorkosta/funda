/* eslint-env jest */
'use strict'

const yourfunc = require('../handlers')
const jestPlugin = require('serverless-jest-plugin')
const lambdaWrapper = jestPlugin.lambdaWrapper
const wrapped = lambdaWrapper.wrap(yourfunc, { handler: 'yourfunc' })
const event = require('./data/event')

describe('yourfunc', () => {
  beforeAll((done) => {
    process.env.CORS = 'false'
    done()
  })

  test(`GET /test gives proper response back`, () => {
    return wrapped.run(event).then((response) => {
      expect(response).toBeDefined()
      expect(response.statusCode).toBe(200)
      const body = response.body
      expect(body).toBe(JSON.stringify({
        statusCode: 200,
        data: [{
          message: 'You find me in the lib folder'
        }]
      }))
    })
  })
})
