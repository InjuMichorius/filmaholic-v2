import gulp from 'gulp'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
 
gulp.src('./public/source/*.js')
    .pipe(concat('builded.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public'))