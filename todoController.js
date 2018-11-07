app.controller("todoController", ($scope) => {
    $scope.tasks = [];

    $scope.add = function() {
        $scope.tasks.push({text:$scope.task, done:false});
        $scope.task = '';
    };

    $scope.remove = function () {
        $scope.tasks = $scope.tasks.filter(task => {
            return !task.done;
        });
    };
});