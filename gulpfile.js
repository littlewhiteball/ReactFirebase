const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const babelify = require('babelify');
const babel = require('gulp-babel');

gulp.task('copystatic', () =>
    gulp.src(['static/**/*.css', 'static/**/*.js', 'static/favicon.ico', 'bower_components/**/*.css'])
        .pipe(gulp.dest('./public')));

gulp.task('copyejs', () =>
    gulp.src(['static/*.ejs'])
        .pipe(gulp.dest('./functions/public')));

gulp.task('buildserver', () =>
    gulp.src(['index.js'], { base: './' })
        .pipe(babel())
        .pipe(gulp.dest('./functions/')));

gulp.task('jsxtojs', () =>
    gulp.src(['./src/**/*'])
        .pipe(babel())
        .pipe(gulp.dest('./js'))
        .pipe(gulp.dest('./functions/src')));

gulp.task('bundle', ['copystatic', 'copyejs', 'buildserver', 'jsxtojs'], () =>
    browserify({
        entries: 'js/index.js',
        debug: true,
    })
        .transform(babelify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./public/js')));
