'use strict'

const replace = require('replace-in-file')

const options = (serviceName) => {
  return {
    files: [
      '../templates/package.json',
      '../templates/serverless.yml',
      '../templates/README.md'
    ],
    // Replacement to make (string or regex)
    from: /MbanqServiceName/g,
    to: serviceName
  }
}

const updateServiceName = () => {
  return replace(options)
    .then(changedFiles => {
      console.log('Modified files:', changedFiles.join(', '))
    })
    .catch(error => {
      console.error('Error occurred:', error)
    })
}

module.exports = updateServiceName
