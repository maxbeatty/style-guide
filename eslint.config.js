import prettier from "eslint-config-prettier";

import node from "./eslint/node.js";

/** @type {import("eslint").Linter.FlatConfig} */
export default [
  node,
  {
    ignores: [".hermit/**"],
  },
  prettier, // should be last to override conflicting rules
];
