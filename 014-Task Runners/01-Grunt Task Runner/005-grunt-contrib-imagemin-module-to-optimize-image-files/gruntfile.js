// author: jaydatt patel

module.exports = function (grunt) {
  // Configure the tasks.

  grunt.initConfig({
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
  grunt.loadNpmTasks("grunt-contrib-imagemin");

  // Setting up Tasks.
  grunt.registerTask("default", ["imagemin"]);
};
