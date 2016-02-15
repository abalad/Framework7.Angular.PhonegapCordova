'use strict';

/**
 * Controller Home
 *
 * @module f7
 * @submodule app
 * @class home
 * @interface home.html
 * @author Maicon Wagner dos Santos
 * @date Tue Dec 22 2015 10:25:14
 */

angular.module('f7.app')
	.controller('HomeController', ['$scope', 'framework7',

		function($scope, Framework7) {
			$scope.coolVariable = 'home';
			$scope.coolMethod = function(){
				console.log('This is a sample method');
			};
		  // var mainView = Framework7.getInstance().addView('.view-main', {});
		 //var viewInstance = Framework7.registerView("mainView",".main-view",{});
		}
	]);
