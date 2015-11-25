var zipCodeApp = angular.module('zipCodeApp', ["ui.router"]);

zipCodeApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/home.html",
        controller: 'ZipCodesCtrl'
    });


$stateProvider.state('guesses', {
        url: "",
        templateUrl: "partials/guesses.html",
        controller: 'ZipCodesCtrl'
    });

});
