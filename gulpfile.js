// Build for Browsers
var gulp = require('gulp');
var babel = require('gulp-babel');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserify = require('browserify');
var source = require('vinyl-source-stream');


// Transpile ES6 to ES5
gulp.task('transpile', function() {
    return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('lib'));
});

// Bundle the transpiled files to dist/
gulp.task('bundle', ['transpile'], function() {
    var config = {
        entries: './index.js',
        standalone: 'SocialMediaChecker',
        debug: true
    };

    return browserify(config)
        .bundle()
        .pipe(source('socialmediachecker.js'))
        .pipe(gulp.dest('dist'));
});

// Uglify
gulp.task('uglify', ['bundle'], function() {
    return gulp.src('dist/socialmediachecker.js')
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['bundle', 'transpile', 'uglify']);
