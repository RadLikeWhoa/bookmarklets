var gulp = require('gulp')
var hogan = require('gulp-hogan')
var rename = require('gulp-rename')

var networks = require('./networks')

gulp.task('views', function () {
  return gulp.src('src/index.hogan')
    .pipe(hogan({ networks: networks.networkList }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('.'))
})

gulp.task('styles', function () {

})

gulp.task('scripts', function () {

})

gulp.task('webserver', function () {

})

gulp.task('watch', function () {

})

gulp.task('default', [ 'views', 'scripts', 'styles', 'webserver', 'watch' ])