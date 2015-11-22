zipCodeApp.controller('ZipCodesCtrl', function ZipCodesCtrl($scope) {

    $scope.zipCodesFB = new Firebase('https://zip-it.firebaseio.com/');

    $scope.zipCodesFB.orderByChild("city").on("child_added", function(snapshot) {
        console.log(snapshot.val().zipCode + " is " + snapshot.val().city);
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
