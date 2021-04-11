# ESlint configuration

> Base eslint configuration for plutot.cool projects.

## Installation

```bash
yarn add -D eslint @plutotcool/eslint-config
```

Don't forget to install the `peerDependencies` according to the [configuration you want to install](#Configurations).

In `.eslintrc`

```json
{
  "extends": "@plutotcool/eslint-config"
}
```

In `package.json`

```json
{
  "scripts": {
    "lint": "eslint . --ext .ts,.tsx"
  }
}
```

## Configurations

| name                                                                        | description                            |
| --------------------------------------------------------------------------- | -------------------------------------- |
| [@plutotcool/eslint-config](#@plutotcool/eslint-config)                     | Basic ESlint configuration.            |
| [@plutotcool/eslint-config/lib/node](#@plutotcool/eslint-config/lib/node)   | Basic ESlint configuration for NodeJS. |
| [@plutotcool/eslint-config/lib/react](#@plutotcool/eslint-config/lib/react) | Basic ESlint configuration for React.  |

### @plutotcool/eslint-config

Basic ESlint configuration.

**Dependencies**:

- @typescript-eslint/eslint-plugin
- prettier
- typescript

### @plutotcool/eslint-config/lib/node

Basic ESlint configuration for NodeJS.

**Dependencies**:

- **[default dependencies](#@plutotcool/eslint-config)**

### @plutotcool/eslint-config/lib/react

Basic ESlint configuration for React.

**Dependencies**:

- **[default dependencies](#@plutotcool/eslint-config)**
- eslint-plugin-react
- eslint-plugin-react-hooks
