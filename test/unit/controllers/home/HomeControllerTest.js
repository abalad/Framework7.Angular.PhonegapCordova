/**
 * Created by Maicon on 11/02/2016.
 */
describe('HomeController', function() {
    beforeEach(angular.mock.module('f7.app'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('$scope.coolMethod', function() {
        it('sets the strength to "strong" if the password length is >8 chars', function() {
            var $scope = {};
            var controller = $controller('HomeController', { $scope: $scope, framework7:Framework7 });
            expect($scope.coolMethod()).toEqual(10);
        });
    });
});