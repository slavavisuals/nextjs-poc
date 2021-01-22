const path = require("path");
const webpack = require("webpack");
module.exports = {
  images: {
    domains: ["ams.iqmetrix.net"],
  },
  trailingSlash: true,
  webpack(config, { dev }) {
    // Perform customizations to webpack config
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
