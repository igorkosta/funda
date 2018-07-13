'use strict'

const ncp = require('ncp')
const path = require('path')

// copy all files over from ./templates to newly created dir
const copy = (serviceDirPath) => {
  return new Promise((resolve, reject) => {
    const templatesDir = path.join(__dirname, '..', 'templates')
    return ncp(templatesDir, serviceDirPath, (error) => {
      if (error) {
        reject(error)
      }
      resolve(true)
    })
  })
}

module.exports = copy
