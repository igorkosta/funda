'use strict'

const questions = require('./questions')
const copy = require('./copyTemplates')
const updateServiceName = require('./updateServiceName')
const installNpmPackages = require('./installNpmPackages')

module.exports = {
  questions,
  copy,
  updateServiceName,
  installNpmPackages
}
