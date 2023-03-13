const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const plugin = withModuleFederationPlugin({

  name: 'mfe1',

  exposes: {
    './ProductRegistryModule': './src/app/product-registry/product-registry.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

module.exports = {
  ...plugin,
  output: {
    ...plugin.output,
    scriptType: 'text/javascript'
  }
}
