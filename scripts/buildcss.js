const gulp = require('gulp')
const concat = require('gulp-concat')
const minify = require('gulp-clean-css')
 
gulp.src('./public/style.css')
    .pipe(concat('builded.css'))
    .pipe(minify())
    .pipe(gulp.dest('public'))