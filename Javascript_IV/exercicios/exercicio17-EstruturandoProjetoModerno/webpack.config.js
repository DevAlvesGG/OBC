const path = require('path');
console.log('Webpack config está sendo lido'); // Adicionando um log para verificar se o arquivo é carregado

module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'), // Corrigido de 'dist' para 'path.resolve(__dirname, 'dist')'
    }
  },

  mode: 'production', // Certifique-se que o 'mode' está definido
  entry: { // Corrigido de 'enty' para 'entry'
    index: './src/index.js'
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist'), // O 'path' deve estar definido
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // ESSENCIAL: Certifique-se que esta linha está presente
        use: ['babel-loader']
      },
    ],
  },
};