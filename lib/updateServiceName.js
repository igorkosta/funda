'use strict'

const replace = require('replace-in-file')

const options = (serviceDirPath, serviceName) => {
  return {
    files: [
      `${serviceDirPath}/package.json`,
      `${serviceDirPath}/serverless.yml`,
      `${serviceDirPath}/README.md`
    ],
    // Replacement to make (string or regex)
    from: /MbanqServiceName/g,
    to: serviceName
  }
}

const updateServiceName = (serviceDirPath, serviceName) => {
  return new Promise((resolve, reject) => {
    const updateOptions = options(serviceDirPath, serviceName)
    return replace(updateOptions)
      .then(changedFiles => {
        resolve(null, changedFiles.join(', '))
      })
      .catch(error => {
        reject(error)
      })
  })
}

module.exports = updateServiceName
