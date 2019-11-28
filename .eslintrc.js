module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'vue/max-attributes-per-line': 'off',
    'no-console': 'off',
    'no-tabs': 'off',
    'space-before-function-paren': 'off',
    'arrow-parens': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-indent': 16
  }
}
