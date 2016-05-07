/**
 * Created by t_boyas on 4/30/16.
 */
var app = angular.module('myServiceModule', []);


app.controller('indexCtrl', function ($scope) {


    $scope.products = [

        {
            "id": 1,
            "name": "An ice sculpture",
            "price": 12.50,
            "tags": ["cold", "ice"],
            "dimensions": {
                "length": 7.0,
                "width": 12.0,
                "height": 9.5
            },
            "warehouseLocation": {
                "latitude": -78.75,
                "longitude": 20.4
            }
        },
        {
            "id": 2,
            "name": "A blue mouse",
            "price": 25.50,
            "dimensions": {
                "length": 3.1,
                "width": 1.0,
                "height": 1.0
            },
            "warehouseLocation": {
                "latitude": 54.4,
                "longitude": -32.7
            }
        },
        {
            "id": 3,
            "name": "Computer monitor",
            "price": 322.50,
            "tags": ["cold", "ice"],
            "dimensions": {
                "length": 17.0,
                "width": 121.0,
                "height": 19.5
            },
            "warehouseLocation": {
                "latitude": -78.75,
                "longitude": 20.4
            }
        },
        {
            "id": 4,
            "name": "Trackpad",
            "price": 35.50,
            "dimensions": {
                "length": 3.1,
                "width": 1.0,
                "height": 1.0
            },
            "warehouseLocation": {
                "latitude": 54.4,
                "longitude": -32.7
            }
        },
        {
            "id": 5,
            "name": "Dell xps laptop",
            "price": 1233.50,
            "tags": ["cold", "ice"],
            "dimensions": {
                "length": 347.0,
                "width": 3412.0,
                "height": 349.5
            },
            "warehouseLocation": {
                "latitude": -78.75,
                "longitude": 20.4
            }
        },
        {
            "id": 6,
            "name": "HP Monitor",
            "price": 2345.50,
            "dimensions": {
                "length": 233.1,
                "width": 123.0,
                "height": 2341.0
            },
            "warehouseLocation": {
                "latitude": 54.4,
                "longitude": -32.7
            }
        }
    ]


})

