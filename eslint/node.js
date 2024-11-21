import globals from "globals";
import nodePlugin from "eslint-plugin-n";

import base from "./base.js";

const nodeRules = {
  "n/callback-return": "error",
  "n/handle-callback-err": ["error", "^(e|err|error)$"],
  "n/hashbang": "error",
  "n/no-callback-literal": "error",
  "n/no-deprecated-api": "error",
  "n/no-exports-assign": "error",
  "n/no-extraneous-import": "error",
  "n/no-extraneous-require": "error",
  "n/no-missing-import": "error",
  "n/no-missing-require": "error",
  "n/no-new-require": "error",
  "n/no-path-concat": "error",
  "n/no-process-env": "error",
  "n/no-process-exit": "error",
  "n/no-sync": "error",
  "n/no-unpublished-bin": "error",
  "n/no-unpublished-import": "error",
  "n/no-unpublished-require": "error",
  "n/no-unsupported-features/es-builtins": "error",
  "n/no-unsupported-features/es-syntax": "error",
  "n/no-unsupported-features/node-builtins": "error",
  "n/process-exit-as-throw": "error",
};

const nodeStyle = {
  "n/exports-style": ["error", "exports"],
  "n/file-extension-in-import": "error",
  "n/global-require": "error",
  "n/no-mixed-requires": "error",
  "n/prefer-global/buffer": "error",
  "n/prefer-global/console": "error",
  "n/prefer-global/process": "error",
  "n/prefer-global/text-decoder": "error",
  "n/prefer-global/text-encoder": "error",
  "n/prefer-global/url": "error",
  "n/prefer-global/url-search-params": "error",
  "n/prefer-node-protocol": "error",
  "n/prefer-promises/dns": "error",
  "n/prefer-promises/fs": "error",
};

/** @type {import("eslint").Linter.Config} */
export default {
  ...base,

  languageOptions: {
    ...base.languageOptions,

    globals: globals.node,
  },

  plugins: {
    n: nodePlugin,
  },

  rules: {
    ...base.rules,
    ...nodeRules,
    ...nodeStyle,
  },

  settings: {
    node: {
      version: ">=20",
    },
  },
};
