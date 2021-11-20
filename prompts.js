module.exports = () => {
  const prompts = [
    {
      name: 'appName',
      message: "What is your app's name?",
      type: 'input'
    }
  ]

  return prompts
}
