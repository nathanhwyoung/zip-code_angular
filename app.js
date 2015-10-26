var zipCodeApp = angular.module('zipCodeApp', ['ui.router']);

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




// var studentSignIn = angular.module('studentSignIn', ['ui.router']);
//
// studentSignIn.config(function($stateProvider, $urlRouterProvider) {
//     $stateProvider.state('home', {
//         url: "",
//         templateUrl: "partials/home.html"
//     });
//
//     $stateProvider.state('students', {
//         url: "/students",
//         templateUrl: "partials/students.html",
//         controller: 'StudentsCtrl'
//     });
//
//     $stateProvider.state('signin', {
//         url: "/signin",
//         templateUrl: "partials/signin.html",
//         controller: 'StatusCtrl'
//     });
//
//     $stateProvider.state('status', {
//         url: "/status",
//         templateUrl: "partials/status.html",
//         controller: 'StudentsCtrl'
//     });
//
//
// });
