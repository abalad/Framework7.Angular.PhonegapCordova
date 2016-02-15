'use strict';

/**
 * Router About
 *
 * @module f7
 * @class extends
 * @author Maicon Wagner dos Santos
 * @date Thu Dec 24 2015 10:12:12
 */

angular.module('f7')
	.config(function($stateProvider){
		$stateProvider
			.state('app.about', {
				url: '/about',
				views: {
					AppContent: {
						templateUrl: 'app/modules/about/about.html',
						controller: 'AboutController'
					}
				},
				resolve: {
					plugins: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load([
							 'app/modules/about/about.controller.js'
						]);
					}]
				}
			})
	});