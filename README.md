# Basic setup for gulp web project

## Installing
Please first clone this project to folder **setup-gulp-basic**

```
cd setup-gulp-basic
npm install
```
## Setting project
Please put all necessary files into this project structure.

## Building
`gulp build-sass` will build all sass styles into **dist/** folder

`gulp build-js` will build js files in specified order into **dist/index.js** and **dist/index.min.js**. Plesse specify files for build in **JS_FILES_ORDER**. For example
```
var JS_FILES_ORDER = [
    "src/js/file-1.js",
    "src/js/file-2.js",
    "src/js/file-3.js"
];
```

or 

```
var JS_FILES_ORDER = [
    "src/js/*.js"
];
```

or 

```
var JS_FILES_ORDER = "src/js/*.js";
```
