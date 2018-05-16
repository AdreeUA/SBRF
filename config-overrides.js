/* config-overrides.js */
const tsImportPluginFactory = require("ts-import-plugin");
const rewireMobX = require("react-app-rewire-mobx");
const {getLoader} = require("react-app-rewired");
const rewireReactHotLoader = require("react-app-rewire-hot-loader");

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

  return config;
};
