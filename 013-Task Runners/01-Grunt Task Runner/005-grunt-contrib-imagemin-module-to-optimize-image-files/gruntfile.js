// author: jaydatt patel

module.exports = function (grunt) {
  // Configure the tasks.

  grunt.initConfig({
    //getting package file
    pkg: grunt.file.readJSON("package.json"),

    // specify tasks.
    options: {
      // Specify mangle: false to prevent changes to your variable and function names. default : true
      mangle: false,
    },

    uglify: {
      options: {
        // adding banner to all files as name in package.json
        banner:
          '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      my_target: {
        files: {
          "dest/js/Calculator.min.js": ["src/javascript/*.js"],
          // [*.js] : to include all .js files
          // [!*.min.js] to not include (exclude) all .min.js files
        },
      },
      my_target2: {
        files: {
          "dest/js/File1.min.js": "src/javascript/JSFile1.js",
          "dest/js/File2.min.js": "src/javascript/JSFile2.js",
        },
      },
    },

    // Configure minify css.
    cssmin: {
      options: {
        // adding banner to all files as name in package.json
        banner:
          '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      my_target: {
        files: [
          {
            // this method will minify all files in output files without joining files
            expand: true,
            cwd: "src/css", // set directory of source files
            src: ["*.css", "!*.min.css"], // set target files
            dest: "dest/css", //set directory of output files
            ext: ".min.css", // set output file extension
          },
        ],
      },
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
        },
        files: {
          "dest/html/index.html": ["src/html/*.html"],
        },
      },
    },

    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 3,
          svgoPlugins: [{ removeViewBox: false }],
        },
        files: [
          {
            expand: true,
            cwd: "src/image",
            src: ["**/*.{png,jpg,gif}"],
            dest: "dest/image",
          },
        ],
      },
    },
  });

  // Load libraries.
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-contrib-imagemin");

  // Setting up Tasks.
  grunt.registerTask("default", ["uglify", "cssmin", "htmlmin", "imagemin"]);
};
