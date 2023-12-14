# ESlint typescript configuration

> Base eslint configuration for plutot.cool projects using Typescript.

## Installation

```bash
npx install-peerdeps -P -D @plutotcool/eslint-config-typescript
```

In `.eslintrc`

```json
{
  "extends": "@plutotcool/eslint-config-typescript"
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
