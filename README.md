# Alias Resolve preLoader for webpack

## Install

```
$ npm install --save alias-resolve-loader
```

## Example webpack config

```js
module.exports = {
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
  }
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
