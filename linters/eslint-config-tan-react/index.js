module.exports = {
  extends: [
    'eslint-config-airbnb'
  ].map(require.resolve),

  parser: require.resolve('babel-eslint'),
  rules: {
    strict: [2, 'global']
  }
}

/* Config from front end project
{
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "plugins": [
    "react"
  ],
  "ecmaFeatures": {
    "jsx": true,
    "modules": true
  },
  "rules": {
    "new-cap": 0,
    "strict": [2, "global"],
    "no-underscore-dangle": 0,
    "no-use-before-define": 0,
    "eol-last": 0,
    "quotes": [2, "single"],
    "comma-dangle": 0,
    "jsx-quotes": [1, "prefer-single"],
    "react/jsx-boolean-value": 1,
    "react/jsx-no-undef": 1,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-multi-comp": [1, { "ignoreStateless": true }],
    "react/no-unknown-property": 1,
    "react/react-in-jsx-scope": 1,
    "react/self-closing-comp": 1
  }
}
*/ 