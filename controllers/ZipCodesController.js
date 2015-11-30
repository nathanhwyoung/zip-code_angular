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
      console.log("Input 1 changed!");
      $scope.newGuess();
    };

    $scope.detectChangeDigit2 = function() {
      console.log("Input 2 changed!");
      $scope.newGuess();
    };

    $scope.detectChangeDigit3 = function() {
      console.log("Input 3 changed!");
      $scope.newGuess();
    };

    $scope.detectChangeDigit4 = function() {
      console.log("Input 4 changed!");
      $scope.newGuess();
    };

    $scope.detectChangeDigit5 = function() {
      console.log("Input 5 changed!");
      $scope.newGuess();
    };

    //new guess function
    $scope.newGuess = function() {
      var query = ref.orderByChild("digit4").equalTo($scope.zipCode.fourthDigit.toString());
      $scope.matchedDigit4Array = $firebaseArray(query);
      console.log($scope.matchedDigit4Array);
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
