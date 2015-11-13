var zipCodeApp = angular.module('zipCodeApp', ["ui.router"]);

zipCodeApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/home.html"
    });


$stateProvider.state('zipcodes', {
        url: "/zipcodes",
        templateUrl: "partials/zipcodes.html",
        controller: 'ZipCodesCtrl'
    });

});
