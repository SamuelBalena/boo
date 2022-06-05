'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function build() {
    return gulp.src('./src/sass/main.scss')
      .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./dist'));
};

exports.build = build;

exports.watch = function () {
  gulp.watch('./src/sass/main.scss', ['sass']);
};