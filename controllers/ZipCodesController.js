zipCodeApp.controller('ZipCodesCtrl', function ZipCodesCtrl($scope) {

    $scope.zipCode = [
      {"firstDigit":""},
      {"secondDigit":""},
      {"thirdDigit":""},
      {"fourthDigit":""},
      {"fifthDigit":""}
    ]

    $scope.zipCodesFB = new Firebase('https://zips-test.firebaseio.com/');

    $scope.zipCodesFB.orderByChild("digit3").equalTo(4).on("child_added", function(snapshot) {
        console.log(snapshot.key() + " is " + snapshot.val().digit3);
        console.log(2345);
    });

    // these functions detect input changes.

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
