module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      { singleQuote: true, parser: 'flow', endOfLine: 'auto' },
    ],
    'no-unused-vars': 'warn',
  },
};
