module.exports = {
  plugins: ["node", "security"],
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:security/recommended"
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
    "no-console": 0,
    indent: [ "error", 2 ],
    "comma-dangle": [ "error", "never" ],
    "comma-spacing": [ "error", { "before": false, "after": true } ],
    "no-trailing-spaces": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": "error",
    "object-curly-spacing": [ "error", "always" ],
    "template-curly-spacing": [ "error", "always" ],
    semi: ["error", "never"],
    eqeqeq: ["error", "always"]
  },
  overrides: [{
    files: "**/*.test.js",
    rules: {
      "node/no-unpublished-require": 0,
      "node/no-missing-require": 0
    }
  }]
}

