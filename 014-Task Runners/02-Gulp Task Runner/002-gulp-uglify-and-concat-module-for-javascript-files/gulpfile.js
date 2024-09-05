// author: jaydatt patel
// import gulp and its required plugin
import gulp from "gulp";
import concat from "gulp-concat";
import uglify from "gulp-uglify";

//minify JS files
function minifyJS() {
  return gulp
    .src("src/javascript/*.js")
    .pipe(uglify())
    .on("error", (err) => console.error(err))
    .pipe(gulp.dest("dest/js"));
}

//concat JS files
function concatJS() {
  return gulp
    .src("dest/js/JSFile*.js")
    .pipe(concat("index.js"))
    .on("error", (err) => console.error(err))
    .pipe(gulp.dest("dest/js"));
}

const build = gulp.series(minifyJS, concatJS);

// Export Tasks
export default build;
