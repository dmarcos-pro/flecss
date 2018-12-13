/**
 * GULP TASKS
 */

// Requires
var gulp         = require('gulp');

// Include plugins
var sass         = require('gulp-sass');
var rename       = require('gulp-rename');
var minifycss    = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var sassLint     = require('gulp-sass-lint');
var babelify     = require('babelify');
var browserify   = require('browserify');
var source       = require('vinyl-source-stream');
var eslint       = require('gulp-eslint');

/**
 * inFolder  : Coding Folder
 * outFolder : Dist Folder
 */
const inFolder     = "../assets/";
const outPutFolderCss = "../assets/css/";

// Lint SASS
gulp.task('sass-lint', function() {
  return gulp.src([inFolder + 'sass/**/*.scss', inFolder + 'sass/main.scss'])
    .pipe(sassLint({
      configFile: '.sass-lint.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});
// Compile SASS (.scss)
gulp.task('sass-compile', function () {
  return gulp.src(inFolder + 'sass/main.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer())
    .pipe(minifycss())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest(outPutFolderCss));
});

// Global SASS task
gulp.task('sass', ['sass-lint', 'sass-compile']);

// Default Task
gulp.task('default', ['sass-lint', 'sass-compile']);

// Watch Task
gulp.watch(inFolder + 'sass/*/*.scss', ['sass-lint', 'sass-compile']);
