module.exports = () => {
  const { resolvePkg } = require('@vue/cli-shared-utils')

  const context = process.cwd()

  const pkg = resolvePkg(context)

  const prompts = [
    {
      default: pkg.name,
      name: 'appName',
      message: "What is your app's name?",
      type: 'input'
    },
    {
      default: pkg.version,
      name: 'appVersion',
      message: "What is your app's current version?",
      type: 'input'
    }
  ]

  return prompts
}
