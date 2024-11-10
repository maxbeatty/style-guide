import js from "@eslint/js";

/** @type {import("eslint").Linter.FlatConfig} */
export default {
  // Tell ESLint not to ignore dot-files, which are ignored by default.
  ignores: ["!.*.js"],
  languageOptions: {
    ecmaVersion: "latest",
  },
  linterOptions: {
    noInlineConfig: true,
    // Report unused `eslint-disable` comments.
    reportUnusedDisableDirectives: true,
  },
  rules: {
    ...js.configs.recommended.rules,
  },
};
