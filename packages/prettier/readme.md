# Prettier

Base prettier config we use by default.

## Installation

We use yarn. Please don't ue any other package manager to keep consitency in the codebase.

```bash
yarn add -D @plutotcool/prettier
```

There's [different ways](https://prettier.io/docs/en/configuration.html#sharing-configurations) to extend a prettier config. We actually do recommend to add a prettier key in your `package.json`:

```json
{
  "prettier": "@plutotcool/prettier/.prettierrc.json"
}
```
