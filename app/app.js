(function(angular){

    var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'mainController'
            })
            .when('/test', {
                templateUrl: 'views/test.html',
                controller: 'aboutController'
            });

    }).controller('mainController', function($scope) {
        $scope.pageClass = 'page-home';
    }).controller('aboutController', function($scope) {
        $scope.pageClass = 'page-about';
    });
    
})(window.angular);