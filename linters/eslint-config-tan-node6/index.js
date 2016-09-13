module.exports = {
  extends: [
    'eslint-config-airbnb-base',
  ].map(require.resolve),

  plugins: [
    'node',
  ],

  parserOptions: {
    sourceType: 'script',
    ecmaFeatures: {
      generators: true,
    },
  },

  rules: {
    'comma-dangle': 0,

    'keyword-spacing': [2, {
      before: true,
      after: true
    }],

    'no-confusing-arrow': 0,

    'no-multi-spaces': [2, {
      exceptions: {
        VariableDeclarator: true
      }
    }],

    'no-param-reassign': 0

    'node/no-unsupported-features': [2, { version: 6 }],

    semi: [2, 'never'],

    strict: [2, 'global'],
  },
}
