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
  });

  // Load libraries.
  grunt.loadNpmTasks("grunt-contrib-uglify");

  // Setting up Tasks.
  grunt.registerTask("default", ["uglify"]);
};
