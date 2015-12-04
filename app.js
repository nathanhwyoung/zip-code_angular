var zipCodeApp = angular.module('zipCodeApp', ["ui.router", "firebase", "angular.filter"]);

zipCodeApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/home.html",
        controller: 'ZipCodesCtrl'
    });

});
