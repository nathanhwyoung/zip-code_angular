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
  //separate ids into different array
  $scope.detectChangeDigit1 = function() {
    var query = ref.orderByChild("digit1").equalTo($scope.zipCode.firstDigit.toString());
    $scope.matchedDigit1Array = $firebaseArray(query);
    $scope.matchedDigit1ArrayIds = [];
    $scope.matchedDigit1Array.$loaded().then(function($scope.matchedDigit1Array) {
      angular.forEach(matchedDigit1Array, function(value, key) {
        $scope.matchedDigit1ArrayIds.push({"id":value.$id, "zip":value.zipCode});
      });
      $scope.matchedDigit1ArrayIds.sort();
    //   console.log(typeof $scope.matchedDigit1ArrayIds);
    //   console.log(typeof $scope.matchedDigit1Array);
    });
    $scope.newGuess();
  };

  $scope.detectChangeDigit2 = function() {
    var query = ref.orderByChild("digit2").equalTo($scope.zipCode.secondDigit.toString());
    $scope.matchedDigit2Array = $firebaseArray(query);
    $scope.matchedDigit2ArrayIds = [];
    $scope.matchedDigit2Array.$loaded().then(function($scope.matchedDigit2Array) {
      angular.forEach(matchedDigit2Array, function(value, key) {
        $scope.matchedDigit2ArrayIds.push({"id":value.$id, "zip":value.zipCode});
      });
      $scope.matchedDigit2ArrayIds.sort();
    //   console.log(typeof $scope.matchedDigit2ArrayIds);
    //   console.log(typeof $scope.matchedDigit2Array);
    });
    $scope.newGuess();
  };

  $scope.detectChangeDigit3 = function() {
    var query = ref.orderByChild("digit3").equalTo($scope.zipCode.thirdDigit.toString());
    $scope.matchedDigit3Array = $firebaseArray(query);
    $scope.matchedDigit3ArrayIds = [];
    $scope.matchedDigit3Array.$loaded().then(function() {
      angular.forEach($scope.matchedDigit3Array, function(value, key) {
        $scope.matchedDigit3ArrayIds.push({"id":value.$id, "zip":value.zipCode});
      });
      $scope.matchedDigit3ArrayIds.sort();
    //   console.log(typeof $scope.matchedDigit3ArrayIds);
    //   console.log(typeof $scope.matchedDigit3Array);
    });
    $scope.newGuess();
  };

  $scope.detectChangeDigit4 = function() {
    var query = ref.orderByChild("digit4").equalTo($scope.zipCode.fourthDigit.toString());
    $scope.matchedDigit4Array = $firebaseArray(query);
    $scope.matchedDigit4ArrayIds = [];
    $scope.matchedDigit4Array.$loaded().then(function() {
      angular.forEach($scope.matchedDigit4Array, function(value, key) {
        $scope.matchedDigit4ArrayIds.push({"id":value.$id, "zip":value.zipCode});

      });
      $scope.matchedDigit4ArrayIds.sort();
    //   console.log(typeof $scope.matchedDigit4ArrayIds);
    //   console.log(typeof $scope.matchedDigit4Array);
    });
    $scope.newGuess();
  };

  $scope.detectChangeDigit5 = function() {
    var query = ref.orderByChild("digit5").equalTo($scope.zipCode.fifthDigit.toString());
    $scope.matchedDigit5Array = $firebaseArray(query);
    $scope.matchedDigit5ArrayIds = [];
    $scope.matchedDigit5Array.$loaded().then(function() {
      angular.forEach($scope.matchedDigit5Array, function(value, key) {
        $scope.matchedDigit5ArrayIds.push({"id":value.$id, "zip":value.zipCode});
      });
      $scope.matchedDigit5ArrayIds.sort();
    //   console.log(typeof $scope.matchedDigit5ArrayIds);
    //   console.log(typeof $scope.matchedDigit5Array);
    });
    $scope.newGuess();
  };


    var compareArray = [];

  // GUESS FUNCTION
  // should be refactored
  $scope.newGuess = function() {
    if (typeof $scope.zipCode.firstDigit !== "undefined") {
      compareArray.push($scope.matchedDigit1ArrayIds);
    //   console.log("length: " + compareArray.length);
    //   console.log(typeof $scope.zipCode.firstDigit);

    }
    if (typeof $scope.zipCode.secondDigit !== "undefined") {
      compareArray.push($scope.matchedDigit2ArrayIds);
    //   console.log("length: " + compareArray.length);
    //   console.log(typeof $scope.zipCode.secondDigit);

    }
    if (typeof $scope.zipCode.thirdDigit !== "undefined") {
      compareArray.push($scope.matchedDigit3ArrayIds);
    //   console.log("length: " + compareArray.length);
    //   console.log(typeof $scope.zipCode.thirdDigit);

    }
    if (typeof $scope.zipCode.fourthDigit !== "undefined") {
      compareArray.push($scope.matchedDigit4ArrayIds);
    //   console.log("length: " + compareArray.length);
    //   console.log(typeof $scope.zipCode.fourthDigit);

    }
    if (typeof $scope.zipCode.fifthDigit !== "undefined") {
      compareArray.push($scope.matchedDigit5ArrayIds);
    //   console.log("length: " + compareArray.length);
    //   console.log(typeof $scope.zipCode.fifthDigit);

    }

    $scope.resultsArray = [];

    // console.log("FINAL LENGTH " + compareArray.length);

    // should be refactored recursively

    // if there is only one number, only one query is needed, and it can be
    // assigned to the results array.
    if (compareArray.length === 1) {
      $scope.resultsArray = compareArray[0];
    //   console.log("1!");
    }

    // if there are two numbers, we need two queries, and the resulting arrays
    // need to be checked against each other to find zipcodes that are only
    // present in both arrays.
    else if (compareArray.length === 2) {
        console.log("2!");
        // console.log(compareArray[0]);
        // console.log(compareArray[1]);

        // console.log(typeof compareArray);
        // console.log(typeof compareArray[0]);
        // console.log(typeof compareArray[1]);

        // for (i = 0; i < compareArray.length; i++) {
        //     console.log("08734");
        // }
        // console.log(compareArray[0].length);
        // console.log('bye length');
        compareArray[0].forEach(function(value, key) {
            console.log("A0 " + value.id + " " + value.zip);
        });
        //
        // console.log(compareArray[1].length);
        // console.log('bye length 2');
        compareArray[1].forEach(function(value, key) {
            console.log("A1 " + value.id + " " + value.zip);
        });

    } else if (compareArray.length === 3) {
        var array1 = compareArray[0];
        var array2 = compareArray[1];
        var array3 = compareArray[2];
        // console.log("3!");

        // console.log(array1);
        // console.log(array2);
        // console.log(array2);

        array1.forEach(function(value, key) {
            console.log("A0 " + value.id + " " + value.zip);
        });

        array2.forEach(function(value, key) {
            console.log("A1 " + value.id + " " + value.zip);
        });

        array3.forEach(function(value, key) {
            console.log("A2 " + value.id + " " + value.zip);
        });

    } else if (compareArray.length === 4) {
        // console.log("4!");

    } else if (compareArray.length === 5) {
        // console.log("5!");

    }


  }


});
