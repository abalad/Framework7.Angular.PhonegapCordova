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


angular.module('f7.libs', [
        'ui.router',
        'oc.lazyLoad'
    ]
);

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

        //Fora o /app, cada endereço de route esta contida em seu modulo(/modules/NameModule/namemodule.route.js)
        $stateProvider
            .state('app', {
                url: '/app',
                templateUrl: 'app/app.html'
            })
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

