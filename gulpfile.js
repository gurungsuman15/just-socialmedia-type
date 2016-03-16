// Build for Browsers
var gulp = require('gulp');
var babel = require('gulp-babel');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

// Compile ES6
gulp.task('compile', function() {

    var config = {
        entries: './src/SocialMediaChecker.js',
        standalone: 'SocialMediaChecker',
        debug: true
    };

    return browserify(config)
        .transform(babelify)
        .bundle()
        .pipe(source('socialmediachecker.js'))
        .pipe(gulp.dest('dist'));
});

// Build for NPM
gulp.task('just-transpile', function() {
    gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('lib'));
});

// Uglify
gulp.task('uglify', ['compile'], function() {
    return gulp.src('dist/socialmediachecker.js')
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['compile', 'just-transpile', 'uglify']);
