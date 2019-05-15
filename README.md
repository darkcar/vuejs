# vuejs
The vue project with static content. 

Step by step learning procedure. 

## Vue Instance LifeCycle Hooks [Very Important]

- Lifecycle hooks = LifeCycle Function = Lifecycle Events

- created hook

- mounted hook

- updated hook

- destroyed 

## vue-resource send get/post/jsonp request

## Vue components 

## Vue Router 

## Vue Events: watch, methods, computed comparision.

## webpack 

Below, it shows how to use webpack for creating a web project. 

```
# folder directory
/webpack-demo/
```

- To initilize a project, simply use ```npm init -y```
- To install a library, use command line `npm install jquery -s`
- Put all the reference packages or reference into `index.js` file. 

---

1. Webpack can solve js competible issue. 
2. webpack can process JS dependencies. 

-----

webpack install webpack-dev-server: 

```bash
npm install webpack-dev-server -D 	
```

and add the dev property to package.json file: 

```json
{
  "name": "webpackproj",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "dev": "webpack-dev-server"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "html-webpack-plugin": "^3.2.0",
    "webpack": "^4.31.0",
    "webpack-cli": "^3.3.2",
    "webpack-dev-server": "^3.3.1"
  },
  "dependencies": {
    "jquery": "^3.4.1"
  }
}
```

To run the `webpack-dev-server`, simply run the command line below: 

```bash
npm run dev # just like npm run build, which will executes the webpack
```

Open the web browser, and set content base and port value: 

```bash
"dev": "webpack-dev-server --open --port 3000 --contentBase src --hot"
```

Webpack html-webpack-plugin

```bash
npm install html-package-plugin -D
```

## Load CSS file in your project

Step 1. Install the appropriate loader: 

```bash
npm install style-loader css-loader -D 
```

Step 2. Add one setting in the `webpack.config.js` file

```javascript
module: { // This node is used to configure all third-party modules loader
        rules:[
            {test: /\.css$/, use: ['style-loader', 'css-loader']}, // Configure third-party loader
        ]
    }
```

Step 3. Re-run the project. 

