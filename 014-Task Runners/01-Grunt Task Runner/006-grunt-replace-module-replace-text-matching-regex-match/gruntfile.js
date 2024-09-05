// author: jaydatt patel

module.exports = function (grunt) {
  // Configure the tasks.
  grunt.initConfig({
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: /ABC-Company/g,
              replacement: "XYZ Pvt Ltd.",
            },
          ],
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ["src/html/HTMLFile.html"],
            dest: "dest/html",
          },
        ],
      },
    },
  });
  grunt.loadNpmTasks("grunt-replace");
  grunt.registerTask("default", ["replace"]);
};
