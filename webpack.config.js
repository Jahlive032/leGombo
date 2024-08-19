const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js', // Le point d'entrée de votre application
  output: {
    filename: 'bundle.js', // Le nom du fichier de sortie
    path: path.resolve(__dirname, 'dist') // Le répertoire de sortie
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
