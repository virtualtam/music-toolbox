module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
  ],
  plugins: [
    'react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
  },
};
