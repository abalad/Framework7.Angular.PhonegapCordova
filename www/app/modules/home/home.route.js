'use strict';

/**
 * Router Home
 *
 * @module f7
 * @class extends
 * @author Maicon Wagner dos Santos
 * @date Thu Dec 25 2015 14:55:47
 */

angular.module('f7')
    .config(function($stateProvider){
        $stateProvider
            .state('app.home', {
                url: '/home',
                views: {
                    AppContent: {
                        templateUrl: 'app/modules/home/home.html',
                        controller: 'HomeController'
                    }
                },
                resolve: {
                    plugins: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'app/modules/home/home.controller.js'
                        ]);
                    }]
                }
            })
    });