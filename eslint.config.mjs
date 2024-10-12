import config from '@rocketseat/eslint-config/react.mjs';

export default {
  ...config,
  plugins: ['prettier', 'tailwindcss', 'simple-import-sort'],
  extends: [
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:simple-import-sort/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'tailwindcss/classnames-order': 'error',
    'simple-import-sort/imports': 'error',
  },
};
