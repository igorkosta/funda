#!/usr/bin/env node

'use strict'

const clear = require('clear')
const chalk = require('chalk')
const figlet = require('figlet')
const path = require('path')
const fs = require('fs')
const {
  questions,
  copy,
  updateServiceName,
  installNpmPackages
} = require('./lib')

clear()
console.log(
  chalk.yellow(
    figlet.textSync('Mbanq SLS', { horizontalLayout: 'full' })
  )
)

const run = async () => {
  const serviceSettings = await questions.getServiceSettings()
  const serviceName = serviceSettings.serviceName
  const serviceDirPath = path.join(process.cwd(), serviceSettings.serviceName)

  if (fs.existsSync(serviceDirPath)) {
    return console.log(
      chalk.red(
        `The directory ${serviceDirPath} already exists. Mbanq SLS won't override it.
Rename or move the directory and try again if you want serverless to create it.`)
    )
  }

  // mkdir for the new lambda function
  fs.mkdirSync(serviceDirPath)

  // copy all files over from ./templates to ./serviceDirPath
  copy(serviceDirPath)
    .then(() => {
      console.log(
        chalk.magenta(`Setting up the folder structure in: ${serviceDirPath}`)
      )
    })
    .then(() => {
      console.log(
        chalk.magenta(`Successfully setup the folder structure`)
      )
      updateServiceName(serviceDirPath, serviceName)
    })
    .then(() => {
      console.log(
        chalk.magenta(`Installing the npm packages`)
      )
      installNpmPackages(serviceDirPath)
    })
    .catch((error) => {
      return console.log(
        chalk.red(
          error
        )
      )
    })
}

run()
