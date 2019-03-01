'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sassOptions = {
  errLogToConsole: true
};
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('sass', function () {
  return gulp
    .src('./sass/style.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('html', function () {
  return gulp
    .src('./public/*.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  browserSync.init({
    server: "./dist"
  });

  gulp.watch('./sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./public/*.html', gulp.series('html')).on('change', browserSync.reload);
});
