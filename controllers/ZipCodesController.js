zipCodeApp.controller('ZipCodesCtrl', function ZipCodesCtrl($scope, ZipCodesFactory) {
    $scope.zipCodes = ZipCodesFactory.zipCodes;
    $scope.ZipCodesFactory = ZipCodesFactory;

});








// studentSignIn.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
//     $scope.students = StudentsFactory.students;
//     $scope.StudentsFactory = StudentsFactory;
//     // console.log($scope.students);
// });
