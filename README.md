<div align="center">
  
  [![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)[![Build Status](https://img.shields.io/travis/RobinCK/alias-resolve-loader.svg?style=flat-square)](https://travis-ci.org/RobinCK/alias-resolve-loader)[![Code Climate](https://img.shields.io/codeclimate/github/RobinCK/alias-resolve-loader.svg?style=flat-square)](https://codeclimate.com/github/RobinCK/alias-resolve-loader)[![npm](https://img.shields.io/npm/dt/alias-resolve-loader.svg?style=flat-square)](https://github.com/RobinCK/alias-resolve-loader)[![Dependencies](https://david-dm.org/robinck/alias-resolve-loader.svg?style=flat-square)](https://david-dm.org/robinck/alias-resolve-loader)[![devDependencies](https://david-dm.org/robinck/alias-resolve-loader/dev-status.svg?style=flat-square)](https://david-dm.org/robinck/alias-resolve-loader#info=devDependencies&view=table)[![NPM version](https://img.shields.io/npm/v/alias-resolve-loader.svg?style=flat-square)](https://www.npmjs.com/package/alias-resolve-loader)
</div>

# Alias Resolve preLoader for webpack

## Install webpack 1.x

```
$ npm install --save-dev alias-resolve-loader@1.0.6
```

## Install webpack 2.x

```
$ npm install --save-dev alias-resolve-loader
```

## Example webpack 1.x config

```js
module.exports = {
  //...
  
  module: {
    preLoaders: [
      {
          test: /\.(less|scss|css)$/,
          loader: "alias-resolve-loader"
      }
    ]
  },
  
  aliasesResolve: {
    "@aliasName": "path/to/your/folder"
  },
  
  //...
};
```

## Example webpack 2.x config

```js
module.exports = {
  //...
  
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(less|scss|css)$/,
        use: {
          loader: 'alias-resolve-loader',
          options: {
            alias: {
             "@aliasName": "path/to/your/folder"
           }
          }
        },
      }
    ]
  },
  
  //...
};
```

A javascript file before compilation
```less
@import "@aliasName/css/user.less";

body {
  background: #9e9e9e;
}
```

will become:
```less
@import "path/to/your/folder/css/user.less";

body {
  background: #9e9e9e;
}
```
