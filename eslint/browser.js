import globals from "globals";

import base from "./base.js";

const builtinRules = {
  "no-alert": "error",
};

/** @type {import("eslint").Linter.Config} */
export default {
  ...base,

  languageOptions: {
    ...base.languageOptions,

    globals: globals.browser,
  },

  rules: {
    ...base.rules,
    ...builtinRules,
  },
};
