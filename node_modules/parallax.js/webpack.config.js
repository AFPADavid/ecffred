var path = require('path');

module.exports = {
  entry : {
    'demo-app' : "./main.js",
    parallax  : "./src/browser.js"
  },
  output: {
    path : path.join(__dirname, 'dist'),
    filename : "[name].js",
  },
  devtool : "source-map",
  module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
}
