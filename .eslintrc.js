module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  extends: [
    'eslint:recommended',
    // 'plugin:@typescript-eslint/eslint-recommended',
    // eslint:recommendedに含まれるルールを型チェックでカバーできるものは無効化とあったが公式に言及見当たらず
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  ignorePatterns: [
    '.eslintrc.js',
    'webpack.common.js',
    'webpack.prod.js',
    'webpack.dev.js',
    'babel.config.js',
  ],
};