const gulp = require('gulp');
const compass = require('gulp-compass');

gulp.task('compass', function() {
  console.log('compass task...');
  gulp.src('./scss/*.scss')
  .pipe(compass({
    config_file: './config.rb',
    css: 'tmp/css',
    sass: 'scss'
  }))
  .pipe(gulp.dest('dist/css'));
});