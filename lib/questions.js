'use strict'

const inquirer = require('inquirer')

module.exports = {
  getServiceSettings: () => {
    const questions = [
      {
        name: 'serviceName',
        type: 'input',
        message: 'Enter the name of your service, e.g. users:',
        validate: function (value) {
          if (value.length) {
            return true
          }
          return 'Please, enter the name of your service'
        }
      }
    ]
    return inquirer.prompt(questions)
  }
}
