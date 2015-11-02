zipCodeApp.controller('ZipCodesCtrl', function ZipCodesCtrl($scope) {

    $scope.myData = new Firebase('https://kshj17qyrg1.firebaseio-demo.com');
    $scope.myData.on('value', function(snapshot) {
        console.log("HELLO");
        // console.log(snapshot.val());
        // $scope.allZipCodes = snapshot.val();

    });

});
