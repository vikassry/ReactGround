var config = {
   entry: './public/javascripts/index.js',

   output: {
      path:'./public/javascripts',
      filename: 'bundle.js',
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
         { test: /\.css$/, loader: "style!css" }
      ]
   }
}

module.exports = config;
