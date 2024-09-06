
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