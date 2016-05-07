/**
 * Created by t_boyas on 4/20/16.
 */


var parking = angular.module("parking", []);

parking.controller("parkingCtrl", function ($scope) {
    $scope.appTitle = "Packt Parking";

    $scope.cars = [];
    $scope.colors = ["White", "Black", "Blue", "Red", "Silver"];

    $scope.park = function (car) {
        car.entrance = new Date();
        $scope.cars.push(car);
        $scope.showDiv =true;
        delete $scope.car;
    };


});



