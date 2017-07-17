# eslint-config-tan-node

ESLint config for TAN node 6 based projects.

## Installation

### NPM
```sh
(
  export PKG=@topagentnetwork/eslint-config-tan-node;
  npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"
)
```

### YARN
```
(
  export PKG=@topagentnetwork/eslint-config-tan-node
  yarn info "$PKG" peerDependencies --json| command jq '.data | to_entries | .[] | "\(.key)@\(.value)"' | xargs yarn add --dev "$PKG"
)
```

Add the following `.eslintrc` file to your project

```json
{
  "extends": "@topagentnetwork/tan-node"
}
```


