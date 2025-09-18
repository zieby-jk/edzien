import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
     {
          files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
          plugins: { js },
          extends: ["js/recommended"],
          languageOptions: {
               globals: {
                    ...globals.browser,
                    ...globals.node
               }
          },
          rules: {
               "semi": ["error", "always"],                  // Enforce semicolons
               "quotes": ["error", "double"],                // Enforce double quotes
               "indent": ["error", 5],                       // Enforce 5 spaces indentation
          }
     },
     tseslint.configs.recommended,
     {
          files: ["**/*.css"],
          plugins: { css },
          language: "css/css",
          extends: ["css/recommended"]
     }
]);