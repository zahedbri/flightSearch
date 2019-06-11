## Steps

**Download Atom (OPTIONAL)**
	https://atom.io/

 **Install all the node packages**
On the root of this project run on your terminal (if you want you can do this with yarn but thats optional)

```bash
    npm install
    npm install gulp-cli -g
    npm install gulp
    npm install webpack@4.25.1 -g
    npm install webpack-cli@3.1.2 -g
```

**make sure versions of gulp is 4.0**
```bash
    gulp -v
```

**Start the dev server**
```bash
  npm run watch
```

**Javascript Structure **
```
assets/js: Entry Folder
assets/js/main.js : Redux Store / Index file
assets/js/actions : redux actions
assets/js/reducers : redux reducers
assets/js/components : React Components
assets/js/components/forms : Field Validation/ redux-fields...
```

**SCSS Structure **
```
assets/scss: Entry Folder
assets/scss/0-plugins:materialize,react-datetime
assets/scss/1-helpers:variables
assets/scss/2-base:resets,global styles, etc
assets/scss/3-layout:footer,nav, etc
assets/scss/4-modules:flight search,modals, etc
assets/scss/5-templates:any over-riding styles for layouts or modules
```
