/**
 * Gulpfile for building the application.
 *
 */
var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var templateCache = require('gulp-angular-templatecache');
var eslint = require('gulp-eslint');
var stylus = require('gulp-stylus');
var template = require('gulp-template');
var browserSync = require('browser-sync');
var pkg = require('./package.json');
var config = require('./config');

// build stylus
gulp.task('build-stylus', function() {
  gulp.src(config.paths.stylus)
    .pipe(stylus({
      'include css': true
    }))
    .pipe(concat(config.out.css))
    .pipe(gulp.dest(config.path));
});

// lint js
gulp.task('lint', function () {
  return gulp.src(config.paths.js)
    // .pipe(eslint())
    // .pipe(eslint.format())
    // .pipe(eslint.failAfterError());
});

// build js - uglified/minified for production
gulp.task('build-js', function () {
  gulp.src(config.paths.js)
    .pipe(concat(config.out.jsMin))
    .pipe(uglify().on('error', function (e) {
      console.error(e);
    }))
    .pipe(gulp.dest(config.path))
})

// build js - simply concatination for development
gulp.task('build-js-pretty', function () {
  gulp.src(config.paths.js)
    .pipe(concat(config.out.js))
    .pipe(gulp.dest(config.path))
})

// build templates
gulp.task('build-templates', function () {
  gulp.src(config.paths.templates)
    .pipe(templateCache(config.out.templates, {
      standalone: true
    }))
    .pipe(gulp.dest(config.path));
});

// setup browser-sync task
gulp.task('browser-sync', function() {
    browserSync({
        files: [
          config.out.css,
          config.out.js,
          config.out.templates,
        ],
        server: {
            baseDir: "./"
        },
        // port: config.browserSyncPort,
        // proxy: "localhost:" + config.serverPort,
    });
});

// setup default gulp task - build everything
gulp.task('default', [
  'lint',
  'build-js',
  'build-js-pretty',
  'build-stylus',
  'build-templates',
]);

// setup gulp watch task - watch files and build accordingly
gulp.task('watch', ['default'], function () {
  gulp.watch(config.paths.js, ['build-js-pretty']); // no need to build minified
  gulp.watch(config.paths.stylus, ['build-stylus']);
  gulp.watch(config.paths.templates, ['build-templates']);
});
