#!/usr/bin/env node

'use strict'

const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
const questions = require('./lib/questions')

clear()
console.log(
  chalk.yellow(
    figlet.textSync('Mbanq SLS', { horizontalLayout: 'full' })
  )
)

const run = async () => {
  const serviceSettings = await questions.getServiceSettings()
  console.log(serviceSettings)
}

run()
