module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: ['www/css/*.scss']
            },
            js: {
                files: ['www/src/*.js']
            },
            html: {
                files: ['www/index.html','/*.html','www/src/app/*/*.html']
            }
        },
        connect: {
            server: {
                options: {
                    port: 8100,
                    base: "www",
                    hostname: "localhost",
                    livereload: true,
                    open: true
                }
            }
        },
        ripple: {
            options: {
                keepAlive: false
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-ripple-emulator');


    grunt.registerTask( "serve", [ 'connect','ripple', 'watch' ]);

};