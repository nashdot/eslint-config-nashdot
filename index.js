module.exports = {
  'extends': [
    'eslint-config-nashdot/base',
    'eslint-config-nashdot/rules/strict',
    'eslint-config-nashdot/rules/react'
  ].map(require.resolve),
  'rules': {}
};
