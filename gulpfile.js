const {src, series, dest} = require('gulp');
const rimraf = require('rimraf');

function clean(cb) {
  rimraf('dist/src', cb);
}

function copyComponents() {
  return src('src/components/**/*.*').pipe(dest('dist/src/components/'));
}

function copyIcons() {
  return src('src/icons/**/*.*').pipe(dest('dist/src/icons/'));
}

function copyDocs() {
  return src('src/docs/**/*.*').pipe(dest('dist/src/docs/'));
}

function copyThemes() {
  return src('src/themes/**/*.*').pipe(dest('dist/src/themes/'));
}

function copyImages() {
  return src('src/images/**/*.*').pipe(dest('dist/src/images/'));
}

function copyIndex() {
  return src('src/index.js').pipe(dest('dist/src/'));
}

function copyReadme() {
  return src('./README.md').pipe(dest('dist/'));
}

exports.default = series(
  clean,
  copyComponents,
  copyIcons,
  copyDocs,
  copyThemes,
  copyImages,
  copyIndex,
  copyReadme,
);
