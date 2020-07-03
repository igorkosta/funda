module.exports = {
  plugins: ['node', 'security'],
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:security/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions:{
    ecmaVersion: 2020,
  },
  env: {
    commonjs: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true
  },
  rules: {
    'no-console': 0,
    'security/detect-child-process': 'off',
    'security/detect-non-literal-fs-filename': 'off'
  },
  overrides: [{
    files: '**/*.test.js',
    rules: {
      'node/no-unpublished-require': 0,
      'node/no-missing-require': 0
    }
  }]
}

