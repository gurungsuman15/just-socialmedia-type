// Build for Browsers
var gulp = require('gulp');
var babel = require('gulp-babel');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');
var rename = require('gulp-rename');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

// TODO: Move this to separate module
var shimify = (function() {
    var transformTools = require('browserify-transform-tools');

    var config = {
        evaluateArguments: true,
        jsFilesOnly: true
    };

    // A flexible shim transform for browserify
    return transformTools.makeRequireTransform(
        'shimify', config,
        function(args, opts, cb) {
            var shimmedModules = opts.config || {};
            var moduleName = args[0];
            var shim = shimmedModules[moduleName];

            if (typeof shim === 'undefined') {
                return cb();
            } else {
                return cb(null, '(' + shim + ')');
            }
        }
    );
})();

// Lint using eslint
gulp.task('lint', function() {
    return gulp.src([
            '**/*.js',
            '!lib/**',
            '!dist/**',
            '!coverage/**',
            '!node_modules/**'
        ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

// Compile ES6
gulp.task('compile', function() {

    var config = {
        entries: './src/SocialMediaChecker.js',
        standalone: 'H',
        debug: true
    };

    var shimifyConfig = {
        'sprintf-js': '{sprintf: window.sprintf, vsprintf: window.vsprintf}',
    };

    return browserify(config)
        .transform(babelify)
        .transform(shimify.configure(shimifyConfig))
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
