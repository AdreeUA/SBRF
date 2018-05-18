/* config-overrides.js */
const tsImportPluginFactory = require("ts-import-plugin");
const rewireMobX = require("react-app-rewire-mobx");
const { getLoader, loaderNameMatches } = require("react-app-rewired");
const rewireReactHotLoader = require("react-app-rewire-hot-loader");
const path = require('path')

module.exports = function override(config, env) {
  config = rewireMobX(config, env);
  config = rewireReactHotLoader(config, env);

  const tsLoader = getLoader(
    config.module.rules,
    rule =>
      rule.loader &&
      typeof rule.loader === "string" &&
      rule.loader.includes("ts-loader")
  );

  const babelLoader = getLoader(
    config.module.rules,
    rule =>
      rule.loader &&
      typeof rule.loader === "string" &&
      rule.loader.includes("babel-loader")
  );

  tsLoader.options = {
    getCustomTransformers: () => ({
      before: [
        tsImportPluginFactory({
          libraryDirectory: "es",
          libraryName: "antd",
          style: "css"
        })
      ]
    })
  };

  babelLoader.options = {
    ...babelLoader.options,
    babelrc: true
  };

  //   console.log(config);

  config.devServer = {
    contentBase: "./dist",
    hot: true
  };

  const cssLoaders = getLoader(
    config.module.rules,
    rule => String(rule.test) === String(/\.css$/),
  )

  cssLoaders.include = path.join(__dirname, 'src');
  cssLoaders.exclude = [
    path.resolve(__dirname, 'src/index.css'),
  ]

  const cssLoader = getLoader(
    config.module.rules,
    rule => loaderNameMatches(rule, 'css-loader')
  )

  cssLoader.loader = require.resolve('typings-for-css-modules-loader')
  cssLoader.options = {
    modules: true,
    namedExport: true,
    localIdentName: '[name]__[local]--[hash:base64:5]'
  }

  return config;
};
