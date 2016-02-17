# eslint-config-nashdot

This package provides Nashdot's .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-nashdot

Our default export contains all of our ESLint rules, including EcmaScript 6+
and React. It requires `eslint` and `eslint-plugin-react`.

1. `npm install --save-dev eslint-config-nashdot eslint-plugin-react eslint`
2. add `"extends": "nashdot"` to your .eslintrc

### eslint-config-nashdot/base

Lints ES6+ but does not lint React. Requires `eslint`.

1. `npm install --save-dev eslint-config-nashdot eslint`
2. add `"extends": "nashdot/base"` to your .eslintrc

### eslint-config-nashdot/legacy

Lints ES5 and below. Only requires `eslint`.

1. `npm install --save-dev eslint-config-nashdot eslint`
2. add `"extends": "nashdot/legacy"` to your .eslintrc
