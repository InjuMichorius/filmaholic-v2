const gulp = require('gulp')
const { src, series, parallel, dest, watch } = require('gulp')

function copyHTML() {
    return src('view/*ejs').pipe(gulp.dest('dist'))
}

exports.default = copyHTML