/**
 * Created by t_boyas on 4/16/16.
 */
angular.module('root', [])
    .controller("index", ["$scope", function ($scope) {
        $scope.message = "Hello World!";
    }]);
