const gulp = require('gulp');
const sass = require()('gulp-sass')(require('sass'));
const imagemin = require()('gulp-imagemin');
const uglify = require()('gulp-uglify');

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass({outputStyle: 'compressed' }))
        .pipe(gulp.dest('./build/styles'));
}

function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript() {
    return gulp.src('./source.scripts/*.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
}
const build = gulp.series(gulp.parallel(styles, images, scripts));

exports.default = function () {
    gulp.watch('./source/styles/*.scss', { ignoreInitial:false }, gulp.series(compilaSass));
    gulp.watch('./source/styles/*.scss', { ignoreInitial:false }, gulp.series(comprimeImagens));
    gulp.watch('./source/scripts/*.js', { ignoreInitial:false }, gulp.series(comprimeJavaScript));
}