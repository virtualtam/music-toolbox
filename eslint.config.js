import js from "@eslint/js";
import pluginVue from 'eslint-plugin-vue'

export default [
  js.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    languageOptions: {
      ecmaVersion: 2022,
    },
    files: ["**/*.js", "**/*.vue"],
    ignores: ["!.*", "node_modules/", "coverage/", "junit/", "build/", "dist/",],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
  }
];
