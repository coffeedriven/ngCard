'use strict';

var istanbul = require('browserify-istanbul');

module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // frameworks to use
        frameworks: ['jasmine', 'browserify'],

        // list of files to exclude
        exclude: [
        ],
 
        // test results reporter to use
        reporters: ['progress', 'coverage'],

        preprocessors: {
          '/**/*.browserify': 'browserify',
          'src/**/*.js': [
                'coverage'
            ]
        },
      
        browserify: {
          transform: [istanbul({
            ignore: [
              '**/test/**',
              '**/bower_components/**',
              '**/node_modules/**',
              '**/templates.js'
            ],
            defaultIgnore: true
          })],
          files: [
            // Vendor
            {
              pattern: 'bower_components/angular/angular.js',
              watched: false
            },
            {
              pattern: 'bower_components/angular-mocks/angular-mocks.js',
              watched: false
            },
  
            // Source
            {pattern: 'ngCard.js', watched: false},

            // Tests
            {pattern: 'test/**/*.spec.js', watched: false}
          ],
          debug: true
        },

        // configure code coverage
        coverageReporter: {
            reporters: [
                {type: 'html', dir: 'coverage/'},
                {type: 'lcov', dir: 'coverage/'},
                {type: 'text-summary'}
            ]
        },
 
        // web server port
        port: 9876,
 
        // enable / disable colors in the output (reporters and logs)
        colors: true,
 
        // level of logging
        logLevel: config.LOG_INFO,
 
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
 
        // Start these browsers
        browsers: ['PhantomJS'],
 
        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,
 
        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};
