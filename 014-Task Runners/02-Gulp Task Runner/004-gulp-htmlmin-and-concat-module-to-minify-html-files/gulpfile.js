// author: jaydatt patel
// import gulp and its required plugin
import gulp from "gulp";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import cleanCSS from "gulp-clean-css";
import htmlmin from "gulp-htmlmin";

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

// minify css files
function minifyCSS() {
  return gulp
    .src("src/css/*.css")
    .pipe(cleanCSS())
    .on("error", (err) => console.error(err))
    .pipe(gulp.dest("dest/css"));
}

//concat css files
function concatCSS() {
  return gulp
    .src("dest/css/CSSFile*.css")
    .pipe(concat("index.css"))
    .on("error", (err) => console.error(err))
    .pipe(gulp.dest("dest/css"));
}

// minify html files
function minifyHTML() {
  return gulp
    .src("src/html/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .on("error", (err) => console.error(err))
    .pipe(gulp.dest("dest/html"));
}

//concat html files
function concatHTML() {
  return gulp
    .src("dest/html/HTMLFile*.html")
    .pipe(concat("index.html"))
    .on("error", (err) => console.error(err))
    .pipe(gulp.dest("dest/html"));
}

//running task parallel for js and css
const build = gulp.parallel(
  gulp.series(minifyJS, concatJS),
  gulp.series(minifyCSS, concatCSS),
  gulp.series(minifyHTML, concatHTML)
);

// Export Tasks
export default build;
