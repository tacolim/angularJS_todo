app.controller("todoController", ($scope) => {
    $scope.saved = localStorage.getItem('tasks');
    $scope.tasks = (localStorage.getItem('tasks')!==null) ? JSON.parse($scope.saved) : [ {text: 'Set some tasks & DO \'EM!', done: false} ];
    
    localStorage.setItem('tasks', JSON.stringify($scope.tasks));

    $scope.add = function() {
        $scope.tasks.push({text: $scope.task, done: false});
        $scope.task = '';
        localStorage.setItem('tasks', JSON.stringify($scope.tasks));
    };

    $scope.remove = function () {
        $scope.tasks = $scope.tasks.filter(task => {
            return !task.done;
        });
        localStorage.setItem('tasks', JSON.stringify($scope.tasks));
    };
});
