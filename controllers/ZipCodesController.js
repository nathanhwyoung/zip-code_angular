zipCodeApp.controller('ZipCodesCtrl', function ZipCodesCtrl($scope) {

    $scope.zipCode = [
      {"firstDigit":""},
      {"secondDigit":""},
      {"thirdDigit":""},
      {"fourthDigit":""},
      {"fifthDigit":""}
    ]

    var ref = new Firebase('https://zip-it.firebaseio.com/zips');

    ref.orderByChild("digit4").equalTo("0").on("child_added", function(snapshot) {
        console.log("key " + snapshot.key() + " is " + snapshot.val().zipCode + " from  " + snapshot.val().city + " " + snapshot.val().state);
    });

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

    // guess function

    $scope.newGuess = function() {
      console.log("NEW GUESS!!!");
    }


});
