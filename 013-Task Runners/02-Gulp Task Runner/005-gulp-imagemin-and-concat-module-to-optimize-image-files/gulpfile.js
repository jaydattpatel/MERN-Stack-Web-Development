// author: jaydatt patel
// import gulp and its required plugin
import gulp from "gulp";
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from "gulp-imagemin";

const arrPlugin = [
  gifsicle({ interlaced: true }),
  mozjpeg({ quality: 75, progressive: true }),
  optipng({ optimizationLevel: 7 }),
  svgo({
    plugins: [
      {
        name: "removeViewBox",
        active: true,
      },
    ],
  }),
];

// minify image files
function minifyIMAGE() {
  return gulp
    .src("src/image/*")
    .pipe(imagemin(arrPlugin))
    .pipe(gulp.dest("dest/image"));
}

//running task parallel
const build = gulp.parallel(gulp.series(minifyIMAGE));

// Export Tasks
export default build;
