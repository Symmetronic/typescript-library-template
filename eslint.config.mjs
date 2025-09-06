// @ts-check

import eslint from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import { globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    settings: {
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
  },
  globalIgnores([
    ".cache/**/*",
    "coverage/**/*",
    "dist/**/*",
    "node_modules/**/*",
  ]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
  },
);
