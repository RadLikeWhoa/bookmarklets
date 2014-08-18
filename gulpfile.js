var gulp = require('gulp')
var mustache = require('gulp-mustache')
var sass = require('gulp-ruby-sass')
var autoprefixer = require('gulp-autoprefixer')
var csso = require('gulp-csso')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')

var lr
var networks = require('./networks')

function notifyLivereload (event) {
  var filename = require('path').relative(__dirname, event.path)

  lr.changed({
    body: {
      files: [ filename ]
    }
  })
}

gulp.task('views', function () {
  return gulp.src('src/index.mustache')
    .pipe(mustache({ networks: networks.networkList }, { extension: '.html' }))
    .pipe(gulp.dest('.'))
})

gulp.task('styles', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .on('error', function (err) { console.log(err.message) })
    .pipe(autoprefixer('last 3 versions'))
    .pipe(csso())
    .pipe(gulp.dest('assets/css'))
})

gulp.task('scripts', function () {
  return gulp.src([ 'bower_components/listjs/dist/list.js', 'bower_components/fittext/fittext.js', 'src/js/**/*.js' ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'))
})

gulp.task('webserver', function () {
  var express = require('express')
  var app = express()

  app.use(require('connect-livereload')())
  app.use(express.static(__dirname))
  app.listen(4000)

  lr = require('tiny-lr')()
  lr.listen(35729)

  require('opn')('http://localhost:4000')
})

gulp.task('watch', function () {
  gulp.watch('src/**/*.mustache', [ 'views' ])
  gulp.watch('src/scss/**/*.scss', [ 'styles' ])
  gulp.watch('src/js/**/*.js', [ 'scripts' ])
  gulp.watch('**/*.html', notifyLivereload)
  gulp.watch('assets/css/**/*.css', notifyLivereload)
  gulp.watch('assets/js/**/*.js', notifyLivereload)
})

gulp.task('default', [ 'views', 'scripts', 'styles', 'webserver', 'watch' ])