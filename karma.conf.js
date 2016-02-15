// Karma configuration
// Generated on Thu Feb 11 2016 11:42:08 GMT-0200 (Horário brasileiro de verão)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      //Bower
      'www/vendors/angular/angular.js',
      'www/vendors/angular-ui-router/release/angular-ui-router.min.js',
      'www/vendors/angular-mocks/angular-mocks.js',
      'www/vendors/framework7/dist/js/framework7.min.js',

       //App
      'www/app/app.js',
      'www/app/modules/**/*.js',

      //Framework7-Factories
      'www/app/factories/framework7.factory.js',
      'www/app/factories/extends.factory.js',

      //Tests
      'test/app/modules/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'PhantomJS'
      //'Chrome'
    ],



    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};
