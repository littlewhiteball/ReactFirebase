var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var babel = require('gulp-babel');

gulp.task('copystatic', function () {
    return gulp.src(['static/*.css', 'static/favicon.ico', 'bower_components/**/*.css'])
        .pipe(gulp.dest('./public'));
})

gulp.task('copyejs', function () {
    return gulp.src(['static/*.ejs'])
        .pipe(gulp.dest('./functions/public'));
})

gulp.task('buildserver', function () {
    return gulp.src(['index.js'], { base: './' })
        .pipe(babel())
        .pipe(gulp.dest('./functions/'));
})

gulp.task('jsxtojs', function () {
    return gulp.src(['./src/**/*'])
        .pipe(babel())
        .pipe(gulp.dest('./js'))
        .pipe(gulp.dest('./functions/src'));
})

gulp.task('bundle', ['copystatic', 'copyejs', 'buildserver', 'jsxtojs'], function () {
    return browserify({
        entries: 'js/index.js',
        debug: true
    })
        .transform(babelify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./public'));
})
