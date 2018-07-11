#!/usr/bin/env node

'use strict'

const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
const path = require('path')
const fs = require('fs')
const ncp = require('ncp')
const replace = require('replace-in-file')
const exec = require('child_process').exec
const questions = require('./lib/questions')

clear()
console.log(
  chalk.yellow(
    figlet.textSync('Mbanq SLS', { horizontalLayout: 'full' })
  )
)

const run = async () => {
  const serviceSettings = await questions.getServiceSettings()
  // create dir with serviceSettingsName
  const serviceDirPath = path.join(process.cwd(), serviceSettings.serviceName)
  if (fs.existsSync(serviceDirPath)) {
    return console.log(
      chalk.red(
        `The directory ${serviceDirPath} already exists. Mbanq SLS won't override it.
Rename or move the directory and try again if you want serverless to create it.`)
    )
  }
  fs.mkdirSync(serviceDirPath)

  // copy all files over from ./templates to ./serviceSettingsName
  ncp('./templates', serviceDirPath, (err) => {
    if (err) {
      return console.log(
        chalk.red(
          err
        )
      )
    }
    console.log(`Initialized service directory with files`)
    // update service name in all the files that are affected
    const options = {
      files: [
        `${serviceDirPath}/package.json`,
        `${serviceDirPath}/serverless.yml`,
        `${serviceDirPath}/README.md`
      ],
      from: /MbanqServiceName/g,
      to: serviceSettings.serviceName
    }

    replace(options)
      .then(changedFiles => {
        console.log('Modified files:', changedFiles.join(', '))
        process.chdir(serviceDirPath)
        exec('npm install', (error, stdout, stderr) => {
          // stream stdout to the terminal window
          // https://stackoverflow.com/questions/14332721/node-js-spawn-child-process-and-get-terminal-output-live
          console.log('stdout: ' + stdout)
          console.log('stderr: ' + stderr)
          if (error !== null) {
            console.log('exec error: ' + error)
          }
        })
      })
      .catch(error => {
        console.error('Error occurred:', error)
      })
  })

  console.log(`${process.cwd}`)
}

run()
