module.exports = {
  root: true,
  extends: ['plugin:vue/recommended', 'plugin:vue-libs/recommended'],
  env: {
    node: true,
    jest: true
  },
  rules: {
    semi: ['error', 'never']
  }
}
