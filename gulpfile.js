var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify-es').default;
var concat = require('gulp-concat');

var DIST_DIR = "dist";
var JS_FILES_ORDER = [];

gulp.task('build-sass', function(){
    return gulp.src('assets/*.sass')
        .pipe(sass())
        .pipe(gulp.dest(DIST_DIR))
});

gulp.task('build-js', function() {
    return gulp.src(JS_FILES_ORDER)
        .pipe(concat('index.js'))
        .pipe(gulp.dest(DIST_DIR))
        .pipe(rename("index.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest(DIST_DIR));
});
