app.controller('checkoutController', ['$scope', '$http', 'ngCart', 'Books', function ($scope, $http, ngCart, Books) {
	$scope.value = ngCart;

	$scope.makePayment = function () {
		$scope.confirmationNumber = $scope.getConfirmationNumber();
	}

	$scope.getConfirmationNumber = function () {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
							.toString(16)
							.substring(1);
		}
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
						s4() + '-' + s4() + s4() + s4();
	}


}]);

