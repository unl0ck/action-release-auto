module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'footer-max-line-length': [0, 'never'],
    'body-max-line-length': [0, 'never'],
  },
  ignores: [(message) => message.startsWith('chore(deps): ')],
};
