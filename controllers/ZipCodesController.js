zipCodeApp.controller('ZipCodesCtrl', function ZipCodesCtrl($scope) {

    $scope.zipCodesFB = new Firebase('https://zip-it-test.firebaseio.com/');

    $scope.zipCodesFB.on('value', function(snapshot) {

        // assign snapshot to allZipCodes array
        $scope.allZipCodes = snapshot.val();
        for (i = 0; i < $scope.allZipCodes.length; i++) {
          console.log(i);
          console.log($scope.allZipCodes[i].city);
          console.log($scope.allZipCodes[i].zipCode);

        }
    });


});
