# ESlint react configuration

> Base eslint configuration for plutot.cool projects using react.

## Installation

```bash
npx install-peerdeps -P -D @plutotcool/eslint-config-react
```

In `.eslintrc`

```json
{
  "extends": "@plutotcool/eslint-config-react"
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
