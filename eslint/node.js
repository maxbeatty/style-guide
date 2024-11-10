import globals from "globals";

import base from "./base.js";

/** @type {import("eslint").Linter.FlatConfig} */
export default {
  ...base,

  languageOptions: {
    ...base.languageOptions,

    globals: globals.node,
  },
};
