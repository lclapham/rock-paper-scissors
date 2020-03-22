let { src, dest, watch } = require("gulp");
let sass = require("gulp-sass");
let cleanCSS = require("gulp-clean-css");
sass.compiler = require("node-sass");

function css() {
  return src("src/*.scss")
    .pipe(sass())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("dist/css"));
}

exports.default = function() {
  watch("src/*.scss", css);
  watch("src/modules/*.scss", css);
};