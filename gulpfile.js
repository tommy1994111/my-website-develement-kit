const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const sass = require('gulp-sass');
const pug = require('gulp-pug');

gulp.task('default', function() {
    // Run ESLint
    gulp.src("js/**/*.js")
        .pipe(eslint())
        .pipe(eslint.format());
    
    // Node source
    gulp.src("js/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist/js"));
    gulp.src("sass/**/*.sass")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
    gulp.src("pug/**/*.pug")
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('dist'))
});