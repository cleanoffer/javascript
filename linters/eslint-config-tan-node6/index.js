module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:node/recommended"
  ],

  plugins: [
    'import',
    'node',
  ],

  env: {
    es6: true,
    node: true
  },

  parserOptions: {
    "ecmaVersion": 2017,
  },

  rules: {
    "arrow-parens": [
      "error",
      "as-needed",
      { "requireForBlockBody": false }
    ],

    "comma-dangle": [
      "warn",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "functions": "never"
      }
    ],

    'import/no-extraneous-dependencies': [2, {
      devDependencies: ["**/test/**/*.js"],
      optionalDependencies: false
    }],

    'keyword-spacing': [2, {
      before: true,
      after: true
    }],

    'max-len': ['warn', 120],

    'no-confusing-arrow': 0,

    'no-multi-spaces': [2, {
      exceptions: {
        VariableDeclarator: true
      }
    }],

    'no-param-reassign': 0,

    'node/no-unsupported-features': [2],

    'object-curly-spacing': ['warn', 'always'],

    semi: [2, 'never'],

    strict: [2, 'global'],
  },
}
