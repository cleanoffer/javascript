# eslint-config-tan-node4

ESLint config for TAN node 4 based projects.

## Installation

```sh
npm i --save-dev @topagentnetwork/eslint-config-tan-node4

(
  export PKG=@topagentnetwork/eslint-config-tan-node4;
  npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"
)
```

Add the following `.eslintrc` file to your project

```json
{
  "extends": "@topagentnetwork/tan-node4"
}
```

