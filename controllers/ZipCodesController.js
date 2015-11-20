zipCodeApp.controller('ZipCodesCtrl', function ZipCodesCtrl($scope, ZipCodesFactory) {

    $scope.allZipCodes = ZipCodesFactory.allZipCodes;
    $scope.ZipCodesFactory = ZipCodesFactory;

    // $scope.zipCodeArray = [];
    // $scope.addFirstDigit = function() {
    //   $scope.zipCodeArray.push({ firstDigit: $scope.firstDigit });
    //   console.log("FUCK");
    //   $scope.firstDigit = null;
    // };

});
