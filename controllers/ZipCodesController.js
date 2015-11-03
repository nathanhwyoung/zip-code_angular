zipCodeApp.controller('ZipCodesCtrl', function ZipCodesCtrl($scope) {

    $scope.myData = new Firebase('https://incandescent-heat-6705.firebaseio.com/');
    $scope.myData.on('value', function(snapshot) {
        console.log(snapshot.val());
        $scope.allZipCodes = snapshot.val();
        console.log(allZipCodes);



    });

});
