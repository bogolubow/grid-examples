'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['> 1%']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'))
        .pipe(reload({ stream:true }));
});

gulp.task('default', ['sass'], function() {
    browserSync({
      server: {
        baseDir: './'
      }
    });
  
    gulp.watch('./sass/**/*.scss', ['sass']);
  });