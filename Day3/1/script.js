var app = angular.module('myServiceModule', []);



app.controller('MyController', ['$scope', 'notify', function ($scope, notify) {
    $scope.callNotify = function () {
        notify($scope.message);
    };
}])


app.factory('notify', ['$window', function (win) {
    return function (message) {
        win.alert(message);
    };
}]);

