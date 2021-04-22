const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
 
gulp.src('./public/source/*.js')
    .pipe(concat('builded.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public'))