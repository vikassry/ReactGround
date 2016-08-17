var config = {
   entry: './public/javascripts/todo.js',

   output: {
      path:'./public',
      filename: 'bundle.js',
      publicPath: "./public"
   },

   devServer: {
      inline: true,
      port: 3001
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
               presets: ['es2015', 'react']
            }
         },
         { test: /\.css$/, loader: 'style-loader!css-loader' },
         { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
      ]
   }
}

module.exports = config;
