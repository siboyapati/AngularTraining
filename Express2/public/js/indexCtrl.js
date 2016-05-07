/**
 * Created by t_boyas on 5/6/16.
 */


app = angular.module('app', []);

app.controller('indexCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.getData = function () {
        $http.get('/api').success(function (data) {
                $scope.bioData = data;
            })
            .error(function (data, status) {
                console.error('Repos error', status, data);
            })
    }
    $scope.getData();


    $scope.create = function (b) {
        $http.post('/api', b).success(function (data) {
            $scope.getData();

        }).error(function (data, status) {

        })

    }


}]);

