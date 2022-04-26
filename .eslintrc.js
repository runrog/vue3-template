// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaFeatures: {
      modules: true,
    },
  },
  env: {
    node: true,
    browser: true,
  },
  extends: ['airbnb-base', 'plugin:vue/vue3-essential'],
  plugins: ['class-property', 'vue'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['ç', './src/components'],
        ],
        extensions: ['.js']
      },
    },
  },
  globals: {
    'window': false,
    'document': false,
    'jest': false,
    'describe': false,
    'it': false,
    'beforeEach': false,
    'test': false,
    'expect': false
  },
  rules: {
    'class-property/class-property-semicolon': 0,
    'class-methods-use-this': 0,
    'import/extensions': 0,
    'no-param-reassign': 0,
    'global-require': 0,
    'no-multi-assign': 0,
    'arrow-parens': 0,
    'no-plusplus': [
      'error', {
        'allowForLoopAfterthoughts': true
      }
    ],
    'linebreak-style': 0,
    'no-bitwise': [
      'error', {
        'allow': ['~']
      }
    ],
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    'import/prefer-default-export': 0,
    'no-restricted-syntax': [
      'error',
      'WithStatement',
    ],
    'no-shadow': 0,
    'import/newline-after-import': 0,
    'vue/no-use-v-if-with-v-for': 1,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  }
}
