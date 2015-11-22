zipCodeApp.controller('ZipCodesCtrl', function ZipCodesCtrl($scope) {

    $scope.zipCodesFB = new Firebase('https://zip-it.firebaseio.com/');

    $scope.zipCodesFB.orderByChild("digit1").equalTo(5).on("child_added", function(snapshot) {
        console.log("ZIPCODE: " + snapshot.val().zipCode + " is for " + snapshot.val().city);
    });



    // $scope.zipCodesFB.on('value', function(snapshot) {
    //
    //     $scope.allZipCodes = snapshot.val();



        // for (i = 0; i < $scope.allZipCodes.length; i++) {
        //   console.log(i);
        //   console.log($scope.allZipCodes[i].city);
        //   console.log($scope.allZipCodes[i].zipCode);
        // }


    // });


});
