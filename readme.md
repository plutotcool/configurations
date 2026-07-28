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

We are using [changelogen](https://github.com/unjs/changelogen) to version our packages. Each package is versioned independently from the [conventional commits](https://www.conventionalcommits.org) landed since its last release tag (`@plutotcool/<package>@<version>`).

1. [Create a separate branch](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/managing-branches) for your changes.
2. Push your branch and open a PR, using conventional commit messages (`feat:`, `fix:`, …) — they end up in the changelog.
3. Once merged, run the [Release workflow](https://github.com/plutotcool/configurations/actions/workflows/release.yml) from the GitHub UI, pick the package to release and, optionally, force a release type (otherwise it is inferred from the commits).

The workflow bumps the version, updates the package changelog, commits, tags, pushes, creates the GitHub release and publishes to both [npm](https://www.npmjs.com/org/plutotcool) and GitHub Packages.

To release from your machine instead:

```sh
pnpm release --dir packages/<package> --from "@plutotcool/<package>@<last-version>"
```
