zipCodeApp.controller('ZipCodesCtrl', function ZipCodesCtrl($scope) {

    $scope.myData = new Firebase('https://incandescent-heat-6705.firebaseio.com/');
    $scope.myData.on('value', function(snapshot) {
        // console.log("HELLO");

        //returns null
        console.log(snapshot.val());


        $scope.allZipCodes = snapshot.val();

        // allZipCodes is not defined
        console.log(allZipCodes);



    });

});
