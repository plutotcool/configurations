# Known Issues

## eslint-config-react

### Plugin "react-hooks" was conflicted \[...\]

When configuring NextJS alongside the settings in the package `@plutotcool/eslint-config-react`, an error arises due to both using the same extended configuration from eslint-config-react-hooks ('plugin:react-hooks/recommended').

To resolve this issue, it is recommended to adjust the `extends` rule in the `.eslintrc` file of the Next Project as follows:

`"extends": ["@plutotcool/eslint-config-react", "next/core-web-vitals"]`

placing `next/core-web-vitals` as the second extension.

However, this solution introduces a potential problem with conflicting overridden rules. For instance, if `"react-hooks/exhaustive-deps": "error"` is specified in `@plutotcool/eslint-config-react`, it may still trigger a warning instead of an error, as `react-hooks/exhaustive-deps` is set to warn.
