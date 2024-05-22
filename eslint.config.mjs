import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
export default [
  {
    ignores: ["**/node_modules/", ".dist/"],
    languageOptions: {
      globals: {
        ...globals.browser,
        process: "readonly", // so that it dont throuhs error as it does not know that process is a local variable
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "no-undef": "error",
    },
    // extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];