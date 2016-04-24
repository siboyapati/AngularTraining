/**
 * Created by t_boyas on 4/22/16.
 */

app.controller("todosAppCtrl", function ($scope) {

    $scope.todoList = [];

    $scope.addTodosList = function () {
        if (event.keyCode == 13 && $scope.task) {
            var _todo={"task": $scope.task,createdAt : new Date(),"isDone":false };
            $scope.todoList.push(_todo);
            $scope.task = " ";
        }
    }

    $scope.deleteProduct = function (r) {
        if(r.isDone){
            r.isDone =false;

        }else{
            r.isDone = true;
        }
    }

});
