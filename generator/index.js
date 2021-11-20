module.exports = api => {
  try {
    api.extendPackage({
      dependencies: {
        'core-js': '3.19.1',
        'normalize-css': '2.3.1',
        'register-service-worker': '1.7.1',
        'vue': '^3.2.22',
        'vue-router': '4.0.12',
        'vuex': '4.0.2'
      },
      devDependencies: {
        '@commitlint/cli': '^13.2.1',
        '@commitlint/config-conventional': '^13.2.0',
        '@types/jest': '^27.0.2',
        '@typescript-eslint/eslint-plugin': '^4.33.0',
        '@typescript-eslint/parser': '^4.33.0',
        '@vue/cli-plugin-babel': '^4.5.0',
        '@vue/cli-plugin-e2e-cypress': '^4.5.0',
        '@vue/cli-plugin-eslint': '^4.5.0',
        '@vue/cli-plugin-pwa': '^4.5.14',
        '@vue/cli-plugin-router': '^4.5.14',
        '@vue/cli-plugin-typescript': '^4.5.14',
        '@vue/cli-plugin-unit-jest': '^4.5.14',
        '@vue/cli-plugin-vuex': '^4.5.14',
        '@vue/cli-service': '^4.5.14',
        '@vue/compiler-sfc': '^3.2.20',
        '@vue/eslint-config-standard': '^6.1.0',
        '@vue/eslint-config-typescript': '^8.0.0',
        '@vue/test-utils': '^2.0.0-0',
        'eslint': '^7.32.0',
        'eslint-plugin-import': '^2.25.2',
        'eslint-plugin-node': '^11.1.0',
        'eslint-plugin-promise': '^5.1.1',
        'eslint-plugin-vue': '^7.20.0',
        'husky': '^7.0.4',
        'identity-obj-proxy': '^3.0.0',
        'node-sass': '^6.0.1',
        'sass-loader': '^10.2.0',
        'typescript': '^4.4.4',
        'vue-jest': '^5.0.0-0'
      },
      scripts: {
        'prepare': 'husky install',
        'sort-package': 'npx sort-package-json'
      },
      engines: {
        node: '>= 14'
      }
    })
  } catch (e) {
    api.exitLog(
      `Unexpected error in vue-cli-plugin-dzango: ${e.message}`,
      'error'
    )

    return
  }
}
