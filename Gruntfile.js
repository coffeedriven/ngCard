'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js', '<%= ngtemplates.app.dest %>'],
        dest: 'dist/ngCard.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/card.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js', '!src/scripts/templates.js'],
      options: {
        // options here to override JSHint defaults
        quotmark: 'single',
        globalstrict: true,
        globals: {
          console: true,
          module: true,
          document: true,
          card: true,
          describe: true,
          beforeEach: true,
          afterEach: true,
          it: true,
          expect: true,
          angular: true,
          inject: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    },
    karma: {
      unit: {
        configFile: 'test/karma.conf.js'
      },
      ci: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    },
    browserify: {
      main: {
       dest: 'build/ngCard.js',
       src: ['ngCard.js'],
        options: {
          debug: true
        }
      }
    },
    ngtemplates: {
      ngCard: {
        src: 'src/partials/**/*.html',
        dest: 'src/scripts/templates.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.registerTask('build', ['jshint', 'ngtemplates', 'browserify:main']);
  grunt.registerTask('test', ['build', 'karma']);

  grunt.registerTask('default', ['build', 'karma:ci', 'concat', 'uglify']);
};
