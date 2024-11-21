import js from "@eslint/js";
import pluginPromise from "eslint-plugin-promise";

const builtInRules = {
  "array-callback-return": "error",
  "block-scoped-var": "error",
  "class-methods-use-this": "error",
  "consistent-return": "error",
  curly: "warn",
  "default-case": "error",
  "default-case-last": "error",
  eqeqeq: "error",
  "grouped-accessor-pairs": "error",
  "linebreak-style": ["error", "unix"],
  "no-alert": "error",
  "no-async-promise-executor": "error",
  "no-await-in-loop": "error",
  "no-bitwise": "error",
  "no-console": "error",
  "no-constant-binary-expression": "error",
  "no-constructor-return": "error",
  "no-else-return": ["error", { allowElseIf: false }],
  "no-empty-function": "error",
  "no-eq-null": "error",
  "no-eval": "error",
  "no-extend-native": "error",
  "no-extra-label": "error",
  "no-floating-decimal": "error",
  "no-implicit-coercion": "error",
  "no-implicit-globals": "error",
  "no-implied-eval": "error",
  "no-iterator": "error",
  "no-label-var": "error",
  "no-labels": "error",
  "no-lone-blocks": "error",
  "no-new": "error",
  "no-new-func": "error",
  "no-new-wrappers": "error",
  "no-param-reassign": "error",
  "no-plusplus": "error",
  "no-promise-executor-return": "error",
  "no-proto": "error",
  "no-return-assign": "error",
  "no-return-await": "error",
  "no-script-url": "error",
  "no-self-compare": "error",
  "no-sequences": "error",
  "no-template-curly-in-string": "error",
  "no-trailing-spaces": "error",
  "no-undef-init": "warn",
  "no-unreachable-loop": "error",
  "no-unused-vars": [
    "error",
    {
      args: "after-used",
      argsIgnorePattern: "^_",
      ignoreRestSiblings: false,
      vars: "all",
      varsIgnorePattern: "^_",
    },
  ],
  "no-useless-assignment": "error",
  "no-useless-call": "error",
  "no-useless-computed-key": "error",
  "no-useless-concat": "error",
  "no-useless-rename": "error",
  "no-useless-return": "error",
  "no-var": "error",
  "no-warning-comments": ["error", { location: "anywhere", terms: ["fixme"] }],
  "object-shorthand": "warn",
  "prefer-const": "error",
  "prefer-object-spread": "error",
  "prefer-promise-reject-errors": "error",
  "prefer-regex-literals": "error",
  "prefer-rest-params": "error",
  "prefer-spread": "error",
  "prefer-template": "error",
  quotes: ["error", "single", { allowTemplateLiterals: false }], // to disallow backtick(`) when quote(') works
  "require-atomic-updates": "error",
  "sort-keys": ["error", "asc", { natural: true }],
  "spaced-comment": "error",
  "wrap-iife": ["error", "inside"],
  yoda: "error",
};

const promiseRules = {
  "promise/always-return": "error",
  "promise/catch-or-return": "error",
  "promise/no-callback-in-promise": "error",
  "promise/no-multiple-resolved": "error",
  "promise/no-new-statics": "error",
  "promise/no-promise-in-callback": "error",
  "promise/no-return-in-finally": "error",
  "promise/no-return-wrap": "error",
  "promise/valid-params": "error",
};

const styleRules = {
  camelcase: "error",
  "func-names": ["error", "as-needed"],
  "max-nested-callbacks": ["error", 3],
  "new-cap": "error",
  "new-parens": "error",
  "no-bitwise": "error",
  "no-lonely-if": "error",
  "no-multi-assign": "error",
  "no-nested-ternary": "error",
  "no-unneeded-ternary": "error",
  "prefer-destructuring": "error",
  "promise/no-nesting": "error",
  "promise/param-names": "error",
  "promise/prefer-await-to-callbacks": "error",
  "promise/prefer-await-to-then": "error",
};

/** @type {import("eslint").Linter.Config} */
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

  plugins: {
    promise: pluginPromise,
  },

  rules: {
    ...js.configs.recommended.rules,
    ...builtInRules,
    ...promiseRules,
    ...styleRules,
  },
};
