module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: ["assets/less"],
          yuicompress: false
        },
        files: {
          "public/stylesheets/style.css": "assets/less/*.less"
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
        src: ['assets/javascript/*.js'],
        // the location of the resulting JS file
        dest: 'public/javascripts/javascript.js'
      }
    },
    watch: {
      files: ['assets/less/*.less', 'assets/javascript/*.js'],
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