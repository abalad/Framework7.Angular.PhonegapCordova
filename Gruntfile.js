module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: ['www/index.css','www/app/modules/**/*.scss','www/app/modules/**/*.css']
            },
            js: {
                files: ['www/app/*.js','www/app/modules/**/*.js']
            },
            html: {
                files: ['www/index.html','www/app/app.html','www/app/modules/**/*.html']
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