zipCodeApp.controller('ZipCodesCtrl', function ZipCodesCtrl($scope) {

    $scope.zipCode = [
      {"firstDigit":""},
      {"secondDigit":""},
      {"thirdDigit":""},
      {"fourthDigit":""},
      {"fifthDigit":""}
    ]

    var ref = new Firebase('https://zips-test.firebaseio.com/zips');

    ref.orderByChild("digit5").equalTo("1").on("child_added", function(snapshot) {
        console.log(2345);
        console.log(snapshot.key() + " is " + snapshot.val().zipCode);
    });

    // var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
    //     ref.orderByChild("weight").limitToLast(2).on("child_added", function(snapshot) {
    //         console.log(snapshot.key());
    //     });

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
