const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

function buildAndMinify() {
    return gulp
        .src(["codef/**/*.js"])
        .pipe(concat("codef.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/"));
}

exports.default = buildAndMinify;
