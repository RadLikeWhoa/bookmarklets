# gulp-hogan [![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url]
> gulp plugin to convert XML to JSON.

## Usage

First, install `gulp-hogan` as a development dependency:

```shell
npm install --save-dev gulp-hogan
```

Then, add it to your `gulpfile.js`:

Say our `template.hogan` is :

```
Follow @{{handle}}.
```

```javascript
var hogan = require('gulp-hogan');

gulp.task('default', function(){
  gulp.src('index.html')
    .pipe(hogan({handle: 'gnumanth'}))
    .pipe(gulp.dest('dist'));
});
```
Now dist will have `template.js` with content as `Follow @gnumanth`

[travis-url]: http://travis-ci.org/hemanth/gulp-hogan
[travis-image]: https://secure.travis-ci.org/lazd/gulp-hogan.png?branch=master
[npm-url]: https://npmjs.org/package/gulp-hogan
[npm-image]: https://badge.fury.io/js/gulp-repl.png

