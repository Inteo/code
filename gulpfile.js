// init
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

// task browserSync
gulp.task('server', ['sass'], function () {
   browserSync.init({
      server: {
         baseDir: './'
      }
   });
   gulp.watch('*.html').on('change', browserSync.reload);
   gulp.watch('css/**/*.scss', ['sass']);
});

// task sass
gulp.task('sass', function () {
   return gulp.src('./css/*.scss')
      .pipe( plumber({
         errorHandler: notify.onError( function (err) {
            return {
               title: 'Ошибка в стилях',
               message: err.message
            }
         })
      }))
      .pipe(sass())
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream());
});

// task dev server
gulp.task('dev', ['server']);