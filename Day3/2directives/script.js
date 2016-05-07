var app = angular.module('myServiceModule', []);


app.directive('workoutTile',function(){
    return{
       // restrict:'C',
        restrict:'AEC',
        //restrict:'E',
        templateUrl : 'workout.html'
    }
})



