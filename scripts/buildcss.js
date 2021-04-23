import gulp from 'gulp'
import concat from 'gulp-concat'
import minify from 'gulp-clean-css'
 
gulp.src('./public/style.css')
    .pipe(concat('builded.css'))
    .pipe(minify())
    .pipe(gulp.dest('public'))