# eslint-config-tan-node6

ESLint config for TAN node 6 based projects.

## Installation

```sh
npm i --save-dev @topagentnetwork/eslint-config-tan-node6

(
  export PKG=@topagentnetwork/eslint-config-tan-node6;
  npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save "$PKG"
)
```

Add the following `.eslintrc` file to your project

```json
{
  "extends": "@topagentnetwork/tan-node6"
}
```


