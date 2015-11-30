zipCodeApp.controller('ZipCodesCtrl', function ZipCodesCtrl($scope, $firebaseArray) {

    // databound to inputs
    $scope.zipCode = [
      {"firstDigit":""},
      {"secondDigit":""},
      {"thirdDigit":""},
      {"fourthDigit":""},
      {"fifthDigit":""}
    ]

    // new firebase reference object
    var ref = new Firebase('https://zip-it.firebaseio.com/zips');

    // methods to detect changes from inputs
    $scope.detectChangeDigit1 = function() {
      var query = ref.orderByChild("digit1").equalTo($scope.zipCode.firstDigit.toString());
      $scope.matchedDigit1Array = $firebaseArray(query);
      console.log($scope.matchedDigit1Array);
    };

    $scope.detectChangeDigit2 = function() {
      var query = ref.orderByChild("digit1").equalTo($scope.zipCode.firstDigit.toString());
      $scope.matchedDigit1Array = $firebaseArray(query);
      console.log($scope.matchedDigit1Array);
    };

    $scope.detectChangeDigit3 = function() {
      var query = ref.orderByChild("digit1").equalTo($scope.zipCode.firstDigit.toString());
      $scope.matchedDigit1Array = $firebaseArray(query);
      console.log($scope.matchedDigit1Array);
    };

    $scope.detectChangeDigit4 = function() {
      var query = ref.orderByChild("digit1").equalTo($scope.zipCode.firstDigit.toString());
      $scope.matchedDigit1Array = $firebaseArray(query);
      console.log($scope.matchedDigit1Array);
    };

    $scope.detectChangeDigit5 = function() {
      var query = ref.orderByChild("digit1").equalTo($scope.zipCode.firstDigit.toString());
      $scope.matchedDigit1Array = $firebaseArray(query);
      console.log($scope.matchedDigit1Array);
    };

    $scope.newGuess = function () {

    }

    // guess function
    // $scope.newGuess = function() {
    //   // console.log("NEW GUESS!!!");
    //   ref.orderByChild("digit4").equalTo($scope.zipCode.fourthDigit.toString())
    //      .on("child_added", function(snapshot) {
    //     console.log("key " + snapshot.key() +
    //                 " is " + snapshot.val().zipCode +
    //                 " Z: " + snapshot.val().digit1 +
    //                 " " + snapshot.val().digit2 +
    //                 " " + snapshot.val().digit3 +
    //                 " " + snapshot.val().digit4 +
    //                 " " + snapshot.val().digit5 +
    //                 " pop: " + snapshot.val().population +
    //                 " from  " + snapshot.val().city +
    //                 " " + snapshot.val().state);
    //   });
    // }


});
