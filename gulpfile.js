const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('sass');

const f = cb => {
  gulp.src('src/index.scss')
    .pipe(sass.sync({
      importer: url => {
        console.log(`Importer received URL: ${url}`);
        return { contents: '' };
      }
    }).on('error', sass.logError))
    .pipe(gulp.dest('dist'));
  cb();
};

module.exports = { default: f };
