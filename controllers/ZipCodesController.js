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

    // methods to detect changes from inputs and query the DB
    // should be refactored to only grab id's and NOT full objects
    $scope.detectChangeDigit1 = function() {
      var query = ref.orderByChild("digit1").equalTo($scope.zipCode.firstDigit.toString());
      $scope.matchedDigit1Array = $firebaseArray(query);
      $scope.matchedDigit1ArrayIds = [];
      $scope.matchedDigit1Array.$loaded().then(function() {
        angular.forEach($scope.matchedDigit1Array, function(value, key) {
          $scope.matchedDigit1ArrayIds.push(value.$id);
        });
        $scope.matchedDigit1ArrayIds.sort();
        console.log($scope.matchedDigit1ArrayIds);
        console.log($scope.matchedDigit1Array);
      });
      $scope.newGuess();
    };

    $scope.detectChangeDigit2 = function() {
      var query = ref.orderByChild("digit2").equalTo($scope.zipCode.secondDigit.toString());
      $scope.matchedDigit2Array = $firebaseArray(query);
      $scope.matchedDigit2ArrayIds = [];
      $scope.matchedDigit2Array.$loaded().then(function() {
        angular.forEach($scope.matchedDigit2Array, function(value, key) {
          $scope.matchedDigit2ArrayIds.push(value.$id);
        });
        $scope.matchedDigit2ArrayIds.sort();
        console.log($scope.matchedDigit2ArrayIds);
        console.log($scope.matchedDigit2Array);
      });
      $scope.newGuess();
    };

    $scope.detectChangeDigit3 = function() {
      var query = ref.orderByChild("digit3").equalTo($scope.zipCode.thirdDigit.toString());
      $scope.matchedDigit3Array = $firebaseArray(query);
      $scope.matchedDigit3ArrayIds = [];
      $scope.matchedDigit3Array.$loaded().then(function() {
        angular.forEach($scope.matchedDigit3Array, function(value, key) {
          $scope.matchedDigit3ArrayIds.push(value.$id);
        });
        $scope.matchedDigit3ArrayIds.sort();
        console.log($scope.matchedDigit3ArrayIds);
        console.log($scope.matchedDigit3Array);
      });
      $scope.newGuess();
    };

    $scope.detectChangeDigit4 = function() {
      var query = ref.orderByChild("digit4").equalTo($scope.zipCode.fourthDigit.toString());
      $scope.matchedDigit4Array = $firebaseArray(query);
      $scope.matchedDigit4ArrayIds = [];
      $scope.matchedDigit4Array.$loaded().then(function() {
        angular.forEach($scope.matchedDigit4Array, function(value, key) {
          $scope.matchedDigit4ArrayIds.push(value.$id);

        });
        $scope.matchedDigit4ArrayIds.sort();
        console.log($scope.matchedDigit4ArrayIds);
        console.log($scope.matchedDigit4Array);
      });
      $scope.newGuess();
    };

    $scope.detectChangeDigit5 = function() {
      var query = ref.orderByChild("digit5").equalTo($scope.zipCode.fifthDigit.toString());
      $scope.matchedDigit5Array = $firebaseArray(query);
      $scope.matchedDigit5ArrayIds = [];
      $scope.matchedDigit5Array.$loaded().then(function() {
        angular.forEach($scope.matchedDigit5Array, function(value, key) {
          $scope.matchedDigit5ArrayIds.push(value.$id);
        });
        $scope.matchedDigit5ArrayIds.sort();
        console.log($scope.matchedDigit5ArrayIds);
        console.log($scope.matchedDigit5Array);
      });
      $scope.newGuess();
    };

    // GUESS FUNCTION
    // should be refactored
    $scope.newGuess = function () {
      var compareArray = [];
      if(typeof $scope.zipCode.firstDigit !== "undefined") {
        compareArray.push($scope.matchedDigit1ArrayIds);
      }
      if(typeof $scope.zipCode.secondDigit !== "undefined") {
        compareArray.splice(1, 0, $scope.matchedDigit2ArrayIds);
      }
      if(typeof $scope.zipCode.thirdDigit !== "undefined") {
        compareArray.splice(2, 0, $scope.matchedDigit3ArrayIds);
      }
      if(typeof $scope.zipCode.fourthDigit !== "undefined") {
        compareArray.splice(3, 0, $scope.matchedDigit4ArrayIds);
      }
      if(typeof $scope.zipCode.fifthDigit !== "undefined") {
        compareArray.splice(4, 0, $scope.matchedDigit5ArrayIds);
      }

      var resultsArray = [];

      // should be refactored recursively

      // if there is only one number, only one query is needed, and it can be
      // assigned to the results array.
      if (compareArray.length === 1) {

      }

      // if there are two numbers, we need two queries, and the resulting arrays
      // need to be checked against each other to find zipcodes that are only
      // present in both arrays.
      else if (compareArray.length === 2) {

      }

      else if (compareArray.length === 3) {
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
