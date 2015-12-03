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
  // REFACTOR: make DRYer, object-oriented, pass value into functions!!
  $scope.detectChangeDigit1 = function() {
    var query = ref.orderByChild("digit1").equalTo($scope.zipCode.firstDigit.toString());
    $scope.digit1Array = $firebaseArray(query);
    $scope.digit1Array.$loaded().then(function() {
      $scope.digit1Array.sort();
      // for (var i = 0; i < $scope.digit1Array.length; i++) {
      // console.log($scope.digit1Array[i].zipCode + " " + $scope.digit1Array[i].city);
      //   }
    });
    newGuess();
  };

  $scope.detectChangeDigit2 = function() {
    var query = ref.orderByChild("digit2").equalTo($scope.zipCode.secondDigit.toString());
    $scope.digit2Array = $firebaseArray(query);
    $scope.digit2Array.$loaded().then(function() {
      $scope.digit2Array.sort();
      // for (var i = 0; i < $scope.digit2Array.length; i++) {
      // console.log($scope.digit2Array[i].zipCode + " " + $scope.digit2Array[i].city);
        // }
    });
    newGuess();
  };

  $scope.detectChangeDigit3 = function() {
    var query = ref.orderByChild("digit3").equalTo($scope.zipCode.thirdDigit.toString());
    $scope.digit3Array = $firebaseArray(query);
    $scope.digit3Array.$loaded().then(function() {
      $scope.digit3Array.sort();
      // for (var i = 0; i < $scope.digit3Array.length; i++) {
      // console.log($scope.digit3Array[i].zipCode + " " + $scope.digit3Array[i].city);
        // }
    });
    newGuess();
  };

  $scope.detectChangeDigit4 = function() {
    var query = ref.orderByChild("digit4").equalTo($scope.zipCode.fourthDigit.toString());
    $scope.digit4Array = $firebaseArray(query);
    $scope.digit4Array.$loaded().then(function() {
      $scope.digit4Array.sort();
      // for (var i = 0; i < $scope.digit4Array.length; i++) {
      // console.log($scope.digit4Array[i].zipCode + " " + $scope.digit4Array[i].city);
        // }
    });
    newGuess();
  };

  $scope.detectChangeDigit5 = function() {
    var query = ref.orderByChild("digit5").equalTo($scope.zipCode.fifthDigit.toString());
    $scope.digit5Array = $firebaseArray(query);
    $scope.digit5Array.$loaded().then(function() {
      $scope.digit5Array.sort();
      // for (var i = 0; i < $scope.digit5Array.length; i++) {
      // console.log($scope.digit5Array[i].zipCode + " " + $scope.digit5Array[i].city);
        // }
    });
    newGuess();
  };



  // GUESS FUNCTION
  // should be refactored
  var newGuess = function() {
    var compareObject = {};
    if (typeof $scope.zipCode.firstDigit !== "undefined") {
      compareArray.push($scope.digit1Array);
    }
    if (typeof $scope.zipCode.secondDigit !== "undefined") {
      compareArray.push($scope.digit2Array);
    }
    if (typeof $scope.zipCode.thirdDigit !== "undefined") {
      compareArray.push($scope.digit3Array);
    }
    if (typeof $scope.zipCode.fourthDigit !== "undefined") {
      compareArray.push($scope.digit4Array);
    }
    if (typeof $scope.zipCode.fifthDigit !== "undefined") {
      compareArray.push($scope.digit5Array);
    }

    $scope.resultsArray = [];

    console.log(compareArray);

    // should be refactored recursively

    // if there is only one number, only one query is needed, and it can be
    // assigned to the results array.
    // if there are two numbers, we need two queries, and the resulting arrays
    // need to be checked against each other to find zipcodes that are only
    // present in both arrays.

    if (compareArray.length === 1) {
      $scope.resultsArray = compareArray[0];
      for(var i = 0; i < $scope.resultsArray.length; i++) {
        console.log($scope.resultsArray[i].zipCode + " " + $scope.resultsArray[i].city);
      }

    } else if (compareArray.length === 2) {
      console.log("2!");
    } else if (compareArray.length === 3) {
      console.log("3!");
    } else if (compareArray.length === 4) {
      console.log("4!");
    } else if (compareArray.length === 5) {
      console.log("5!");
    }
  }
});
