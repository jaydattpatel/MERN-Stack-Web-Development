// author: jaydatt patel
// import gulp and its required plugin
import gulp from "gulp";
import replace from "gulp-replace";

function replaceSTR() {
  return gulp
    .src(["src/html/HTMLFile.html"])
    .pipe(replace(/ABC-/g, "XYZ "))
    .pipe(replace("Company", "Pvt Ltd"))
    .pipe(gulp.dest("dest/html"));
}

//running task parallel
const build = gulp.parallel(gulp.series(replaceSTR));

// Export Tasks
export default build;
