# Webpack Learning

## Asset modules

### Types: <br>

- asset/resource <br>
- asset/inline (files less than 8kb) <br>
- asset (combination of resource and inline based on size threshold. Default is 8kb) <br>
- asset/source (source code of asset is bundled with JS)

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/'
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource'
        // type: 'asset',
        // parser: {
        //   defaultUrlCondition: {
        //     maxSize: 3 * 1024 // 3 kb (default is 8 kb)
        //   }
        // }
      }
    ]
  }
};
```
