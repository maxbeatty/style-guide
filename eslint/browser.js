import noUnsanitized from "eslint-plugin-no-unsanitized";
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

  plugins: {
    "no-unsanitized": noUnsanitized,
  },

  rules: {
    ...base.rules,
    ...builtinRules,
    "import/no-nodejs-modules": "error",
    "no-unsanitized/method": "error",
    "no-unsanitized/property": "error",
  },
};
