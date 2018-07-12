'use strict'

const spawn = require('child_process').spawn
const chalk = require('chalk')
const figlet = require('figlet')

const installNpmPackages = (serviceDirPath) => {
  process.chdir(serviceDirPath)
  return new Promise((resolve, reject) => {
    const childProcess = spawn('npm', ['install'], { stdio: 'inherit' })
    childProcess.on('close', (code) => {
      resolve(true)
      process.stdout.write(`Dependencies installed successfully\n`)
      console.log(
        chalk.yellow(
          figlet.textSync(`Your new service is ready`, { horizontalLayout: 'full' })
        )
      )
    })
    childProcess.on('error', (error) => {
      reject(error)
    })
  })
}

module.exports = installNpmPackages
