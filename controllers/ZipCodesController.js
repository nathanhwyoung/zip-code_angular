zipCodeApp.controller('ZipCodesCtrl', function ZipCodesCtrl($scope, $firebaseArray) {

    // don't need this instantiation??!
    // databound to inputs
    // $scope.zipCode = [
    //   {"firstDigit":""},
    //   {"secondDigit":""},
    //   {"thirdDigit":""},
    //   {"fourthDigit":""},
    //   {"fifthDigit":""}
    // ]

    // new firebase reference object
    var ref = new Firebase('https://zip-it.firebaseio.com/zips');

    // methods to detect changes from inputs
    $scope.detectChangeDigit1 = function() {
      var query = ref.orderByChild("digit1").equalTo($scope.zipCode.firstDigit.toString());
      $scope.matchedDigit1Array = $firebaseArray(query);
      $scope.newGuess();
    };

    $scope.detectChangeDigit2 = function() {
      var query = ref.orderByChild("digit2").equalTo($scope.zipCode.secondDigit.toString());
      $scope.matchedDigit2Array = $firebaseArray(query);
      $scope.newGuess();
    };

    $scope.detectChangeDigit3 = function() {
      var query = ref.orderByChild("digit3").equalTo($scope.zipCode.thirdDigit.toString());
      $scope.matchedDigit3Array = $firebaseArray(query);
      $scope.newGuess();
    };

    $scope.detectChangeDigit4 = function() {
      var query = ref.orderByChild("digit4").equalTo($scope.zipCode.fourthDigit.toString());
      $scope.matchedDigit4Array = $firebaseArray(query);
      $scope.newGuess();
    };

    $scope.detectChangeDigit5 = function() {
      var query = ref.orderByChild("digit5").equalTo($scope.zipCode.fifthDigit.toString());
      $scope.matchedDigit5Array = $firebaseArray(query);
      $scope.newGuess();
    };

    // GUESS FUNCTION
    // should be refactored
    $scope.newGuess = function () {
      var compareArray = [];
      if(typeof $scope.zipCode.firstDigit !== "undefined") {
        compareArray.push($scope.matchedDigit1Array);
      }
      if(typeof $scope.zipCode.secondDigit !== "undefined") {
        compareArray.splice(1, 0, $scope.matchedDigit2Array);
        // compareArray.push($scope.matchedDigit2Array);
      }
      if(typeof $scope.zipCode.thirdDigit !== "undefined") {
        compareArray.splice(2, 0, $scope.matchedDigit3Array);
        // compareArray.push($scope.matchedDigit3Array);
      }
      if(typeof $scope.zipCode.fourthDigit !== "undefined") {
        compareArray.splice(3, 0, $scope.matchedDigit4Array);
        // compareArray.push($scope.matchedDigit4Array);
      }
      if(typeof $scope.zipCode.fifthDigit !== "undefined") {
        compareArray.splice(4, 0, $scope.matchedDigit5Array);
        // compareArray.push($scope.matchedDigit5Array);
      }

      var resultsArray = [];

      // should be refactored recursively
      if (compareArray.length === 1) {
        resultsArray = compareArray;
        // console.log(compareArray);
        angular.forEach(resultsArray, function(value, key) {
          // console.log(value);
        })
      } else if (compareArray.length === 2) {
        console.log(compareArray[1]);
        // angular.forEach(compareArray[0], function(value, key) {
        //   console.log(key);
        // });
        // console.log(2);
      } else if (compareArray.length === 3) {
        console.log(compareArray[2]);
      } else if (compareArray.length === 4) {
        console.log(compareArray[3]);
      } else if (compareArray.length === 5) {
        console.log(compareArray[4]);
      }

      // for(i=0; i < compareArray.length; i++) {
      //   console.log(i);
      // }

      // angular.forEach($scope.zipCode, function(value, key) {
      //   console.log(value);
      //   if(typeof value !== "undefined") {
      //     console.log("yes");
      //   }
      // });

      // $scope.matchedDigit1Array.$loaded().then(function() {
      //   angular.forEach($scope.matchedDigit1Array, function(value, key) {
      //     console.log(value.city + value.population);
        // });
      // });
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
