var app = angular.module('myServiceModule', []);

app.controller('myCtrl', function ($scope) {
    $scope.appTitle = "[Packt] Parking";
    $scope.showAlert = true;
    $scope.alertTopic = "Something went wrong!";
    $scope.descriptionTopic ="descriptionTopic";
    $scope.alertMessage = "You must inform the plate and the color of the car!";

    $scope.closeAlert = function () {
        $scope.showAlert = false;
    };

})


app.directive("alert1", function () {

    return {
        restrict: 'E',
        scope: {
            topic: '=topic',
            description: '=description',
            close: '&close'
        },
        templateUrl: "alert1.html",
        replace: true
    };
});
