/**
 * Created by sboyapati on 2/5/16.
 */
app.controller('homeController', ['$scope', '$http', 'ngCart', 'Books', function ($scope, $http, ngCart, Books) {

	$scope.formData = {};
	$scope.value =ngCart;

	$scope.getBooksList = function () {
		Books.get()
						.success(function (data) {
							$scope.books = data;
						})
						.error(function (data, status) {
							console.error('Repos error', status, data);
						})
	}

	$scope.createBook = function (book) {
		console.log(book);
		Books.create(book)
						.success(function (data) {
							console.log('success');
							$scope.getBooksList();
							$scope.book = null;//clean the forms
						})
						.error(function (data, status) {
							console.error('Repos error', status, data);
						})

	}

	$scope.deleteBook = function (id) {
		Books.delete(id)
						.success(function (data) {
							$scope.getBooksList();
						})
						.error(function (data, status) {
							console.error('Repos error', status, data);
						})
	}

	Books.get()
					.success(function (data) {
						$scope.books = data;
						console.log(data);
						$scope.loading = false;
					})
					.error(function (data, status) {
						console.error('Repos error', status, data);
					})

	//Dummy data for testing.
	$scope.products =
					[
						{id: 1, name: "Soap", desc: "soap desc", price: "25", Quantity: "10"},
						{id: 2, name: "Bag", desc: "bag desc", price: "100", Quantity: "15"},
						{id: 3, name: "Pen", desc: "pen desc", price: "15", Quantity: "13"}
					];

}]);

