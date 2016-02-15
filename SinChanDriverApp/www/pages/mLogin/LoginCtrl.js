app.controller('LoginCtrl', ['$state', '$scope', function ($state, $scope) {
    $scope.login = function () {
        $state.go("m.home");
    };
}]);