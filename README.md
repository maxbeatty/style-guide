# style-guide

Style guide for TypeScript, ESLint, and Prettier

## Installation

All of the configurations are contained in one package: `@maxbeatty/style-guide`

```sh
npm install --save-dev @maxbeatty/style-guide
```

### Prettier

> Note: Prettier is a peer-dependency of this package, and should be installed
> at the root of your project.
>
> See: <https://prettier.io/docs/en/install.html>

To use the shared Prettier config, set the following in `package.json`.

```json
{
  "prettier": "@maxbeatty/style-guide/prettier"
}
```

### ESLint

> Note: ESLint is a peer-dependency of this package, and should be installed
> at the root of your project.
>
> See: <https://eslint.org/docs/user-guide/getting-started#installation-and-usage>

This ESLint config is designed to be composable with the [newer flag configuration files](https://eslint.org/docs/latest/use/configure/configuration-files-new).

```js
import nodeConfig from "@maxbeatty/style-guide/eslint/node";

export default [
  nodeConfig,
  // other configuration objects...
];
```

## Contributing

Please read the [contributing](./CONTRIBUTING.md) guide.
