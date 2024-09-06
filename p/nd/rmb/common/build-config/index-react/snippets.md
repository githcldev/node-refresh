
-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------

// wp-dev-config.js  
  {
    test: /\.less$/,
    use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
  },

-------------------------------------------------

new DynamicCdnWebpackPlugin({
        'env': 'production',
        'verbose': true,
        'only': ['React']
      })

-------------------------------------------------


<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js" integrity="sha256-1fEPhSsRKlFKGfK3eO710tEweHh1fwokU5wFGDHO+vg=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.8.6/umd/react.production.min.js" integrity="sha256-3vo65ZXn5pfsCfGM5H55X+SmwJHBlyNHPwRmWAPgJnM=" crossorigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/cjs/react-dom.production.min.js" integrity="sha256-VgMW+i/z7z4KNlYIE7P/GvBV7mg9C/K7flo1ssoopCI=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-router/5.0.0/react-router.min.js" integrity="sha256-jMpKCGbe4xyH4XXYCrM55IQvmcGVJ6YYKvIFceL4ymU=" crossorigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js" integrity="sha256-7/yoZS3548fXSRXqc/xYzjsmuW3sFKzuvOCHd06Pmps=" crossorigin="anonymous"></script>



<script>
    setTimeout(function(){
      var bS = document.createElement("script");
      bS.type = "text/javascript";
      bS.async = true;
      bS.src = "main.64055f4fc0c3ebc4b7cb.bundle.js";
      document.body.appendChild(bS);
    }, 1500)
</script>

-------------------------------------------------

// config.optimization = {
//   minimizer: [
//     new UglifyJsPlugin({
//       parallel: true,
//       uglifyOptions: {
//         compress: {
//           pure_getters: true,
//           passes: 2,
//           drop_console: true,
//           warnings: false,
//           // screw_ie8: true,
//           conditionals: true,
//           unused: true,
//           comparisons: true,
//           sequences: true,
//           dead_code: true,
//           evaluate: true,
//           if_return: true,
//           join_vars: true,
//           negate_iife: false // we need this for lazy v8
//         },
//         output: {
//           ascii_only: true,
//           comments: false,
//         },
//       },
//     }),
//     // new OptimizeCssAssetsPlugin()
//   ],
//   minimize: true,
//   mangleWasmImports: true,
//   removeAvailableModules: true,
//   removeEmptyChunks: true,
//   mergeDuplicateChunks: true,
//   occurrenceOrder: true,
//   concatenateModules: true,
//   sideEffects: true,    
//   splitChunks: {
//     // Auto split vendor modules in production only
//     chunks: 'all'
//   }
// }