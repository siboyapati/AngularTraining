/**
 * Created by t_boyas on 4/22/16.
 */

app.controller("todosAppCtrl", function ($scope) {

    $scope.products = ["milk", "bread"]

    $scope.addProductToList = function () {
        if (event.keyCode == 13 && $scope.productItem) {
            $scope.products.push($scope.productItem);
        }
    }

    $scope.deleteProduct = function (r) {
        $scope.products.pop(r);
    }

});
