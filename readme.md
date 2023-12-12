# Configurations

> Base configurations for plutot.cool projects.

[![current github tag](https://img.shields.io/github/tag/plutotcool/configurations.svg)](https://github.com/plutotcool/configurations/tags)

[![license](https://img.shields.io/github/license/plutotcool/configurations.svg)](https://github.com/plutotcool/configurations/blob/master/license)

## Packages

| name                                                                                                                 | description               |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [@plutotcool/typescript-config](https://github.com/plutotcool/configurations/blob/master/packages/typescript-config) | Typescript configuration. |
| [@plutotcool/prettier-config](https://github.com/plutotcool/configurations/blob/master/packages/prettier-config)     | Prettier configurations.  |

## Release

We are using [changesets](https://github.com/changesets/changesets) to create "release intents" for our packages. When those pop up on main a release PR gets prepared automatically and once it gets merged actual release happen (also automatically).

1. [Create a separate branch](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/managing-branches) for your changes.
2. Create a changeset by running `pnpm changeset`. [More about changesets](https://github.com/atlassian/changesets).
3. Push your branch and open a PR
