const {injectBabelPlugin} = require('react-app-rewired')

const babelConfig = [
  "@babel/plugin-proposal-decorators",
  {legacy: true}
]

/* config-overrides.js */
module.exports = function override(config, env) {
  config = injectBabelPlugin(babelConfig, config)
  return config
}