/*global angular*/
'use strict';

/**
 * @module f7
 * @author Maicon Wagner dos Santos
 * @date Tue Dec 22 2015 13:56:06 GMT+0530 (IST)
 */

// init modules, module names equal to folder structure
angular.module('f7.app', []); // view controllers etc.
angular.module('f7.services', []); // services
angular.module('f7.filters', []); // filter
angular.module('f7.factories', []); // helper
angular.module('f7.directives', []); // directives

angular.module('f7.libs', ['ui.router']);

angular.module('f7', ['f7.services', 'f7.filters', 'f7.factories', 'f7.directives', 'f7.app', 'f7.libs'])

    .run(['framework7',function(Framework7) {
        Framework7.register({
            modalTitle: 'Framework7',
            material: true
        });
    }])

    .constant('Config', {
        constantVariables: 'constantValue'
    })

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('app', {
                url: '/app',
                templateUrl: 'src/app/app.html'
            })
            .state('app.about', {
                url: '/about',
                views: {
                    AppContent: {
                        templateUrl: 'src/app/about/about.html',
                        controller: 'AboutController'
                    }
                }
            })
            .state('app.home', {
                url: '/home',
                views: {
                    AppContent: {
                        templateUrl: 'src/app/home/home.html',
                        controller: 'HomeController'
                    }
                }
            })
        //~!states!~
        $urlRouterProvider.otherwise("/app/home");
    })
    .controller('root.controller', ['$rootScope','$state', 'framework7',function($rootScope, $state, Framework7) {
        //
        // $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        //
        // });
        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            setTimeout(function() {
                Framework7.getInstance().initPage(('.pages'));
            });
        });
        // $rootScope.$on('$viewContentLoading', function(event, toState, toParams, fromState, fromParams) {
        //
        // });
        $rootScope.$on('$viewContentLoaded', function(event, toState, toParams, fromState, fromParams) {
            // event.preventDefault();
        });
    }]);

