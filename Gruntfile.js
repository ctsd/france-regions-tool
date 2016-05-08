module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    dirs: {
      srcPath: 'src',
      destPath: 'dist',
      srcCssPath: '<%= dirs.srcPath %>/css',
      srcLessPath: '<%= dirs.srcPath %>/less',
      destCssPath: '<%= dirs.destPath %>/css',
      srcJsPath: '<%= dirs.srcPath %>/js',
      destJsPath: '<%= dirs.destPath %>/js'
    },

    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: [{
          src: [
            '<%= dirs.srcLessPath %>/main.less'
          ],
          dest: '<%= dirs.srcCssPath %>/',
          expand: true,
          rename: function(dest, src) {
            return dest + src.match(/\/([^/]*)$/)[1].replace('.less', '.css');
          }
        }]
      }
    },

    concat: {
      css: {
        src: [
          '<%= dirs.srcCssPath %>/*.css'
        ],
        dest: '<%= dirs.destCssPath %>/main.css'
      }
    },

    uglify: {
      base: {
        files: {
          '<%= dirs.destJsPath %>/main.js': [
            '<%= dirs.srcJsPath %>/factories.js',
            '<%= dirs.srcJsPath %>/main.js'
          ]
        }
      },
      resources: {
        files: {
          '<%= dirs.destJsPath %>/resources.js': [
            '<%= dirs.srcJsPath %>/bower_components/jquery/dist/jquery.min.js',
            '<%= dirs.srcJsPath %>/bower_components/angular/angular.min.js'
          ]
        }
      },
      options: {
        mangle: false
      }
    },

    watch: {
      less: {
        files: '<%= dirs.srcLessPath %>/*.less',
        tasks: [ 'less', 'concat' ]
      },
      uglify: {
        files: '<%= dirs.srcJsPath %>/*.js',
        tasks: [ 'uglify:base' ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-serve');

  grunt.registerTask('default', ['watch']);

};
