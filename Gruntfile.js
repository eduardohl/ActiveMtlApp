module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: ["src/less"],
          yuicompress: false
        },
        files: {
          "public/stylesheets/style.css": "src/less/*.less"
        }
      }
    },
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      dist: {
        // the files to concatenate
        src: ['public/javascripts/src/*.js'],
        // the location of the resulting JS file
        dest: 'public/javascripts/javascript.js'
      }
    },
    watch: {
      files: ['src/less/*.less', 'public/javascripts/src/*.js'],
      tasks: ['default'],
      options: {
        nospawn: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['less:development', 'concat', 'watch']);
};