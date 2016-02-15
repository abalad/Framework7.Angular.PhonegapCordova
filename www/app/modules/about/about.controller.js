'use strict';

/**
 * Controller About
 *
 * @module f7
 * @submodule app
 * @class about
 * @interface about.html
 * @author Maicon Wagner dos Santos
 * @date Tue Dec 22 2015 14:56:20
 */

angular.module('f7.app')
	.controller('AboutController', ["$scope", "$rootScope", "$stateParams", "$log", "$q",

		function($scope, $rootScope, $stateParams, $log, $q) {
			$scope.coolVariable = "about";
			$scope.coolMethod = function(){
				console.log("This is a sample method");
			};
		}
	]);