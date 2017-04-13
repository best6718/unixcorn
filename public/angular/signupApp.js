var gapp = angular.module('myApp2', []);
gapp.controller('validateCtrl', function($scope) {
    $scope.user = 'John Doe';
    $scope.email = 'john.doe@gmail.com';
    $scope.password1 = '1234';
    $scope.password2 = '1234';
});

angular
    .module('myApp2')
    .controller('gapp', gapp);
    
    