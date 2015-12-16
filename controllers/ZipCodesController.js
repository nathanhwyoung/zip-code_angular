    zipCodeApp.controller('ZipCodesCtrl', function ZipCodesCtrl($scope, $firebaseArray) {


        // initialize variable so that div does NOT display initially
        $scope.singleResult = null;

        // move this to factory & refactor
        var ref = new Firebase('https://zip-it.firebaseio.com/zips');

        // refactor these methods to only retrieve the ID's of the objects
        $scope.detectChangeDigit1 = function() {
            var query = ref.orderByChild("digit1").equalTo($scope.zipCode.firstDigit.toString());
            $scope.digit1Array = $firebaseArray(query);
            $scope.digit1Array.$loaded().then(function() {
                $scope.digit1Array.sort();
                newGuess();
            });
        };

        $scope.detectChangeDigit2 = function() {
            var query = ref.orderByChild("digit2").equalTo($scope.zipCode.secondDigit.toString());
            $scope.digit2Array = $firebaseArray(query);
            $scope.digit2Array.$loaded().then(function() {
                $scope.digit2Array.sort();
                newGuess();
            });
        };

        $scope.detectChangeDigit3 = function() {
            var query = ref.orderByChild("digit3").equalTo($scope.zipCode.thirdDigit.toString());
            $scope.digit3Array = $firebaseArray(query);
            $scope.digit3Array.$loaded().then(function() {
                $scope.digit3Array.sort();
                newGuess();
            });

        };

        $scope.detectChangeDigit4 = function() {
            var query = ref.orderByChild("digit4").equalTo($scope.zipCode.fourthDigit.toString());
            $scope.digit4Array = $firebaseArray(query);
            $scope.digit4Array.$loaded().then(function() {
                $scope.digit4Array.sort();
                newGuess();
            });
        };

        $scope.detectChangeDigit5 = function() {
            var query = ref.orderByChild("digit5").equalTo($scope.zipCode.fifthDigit.toString());
            $scope.digit5Array = $firebaseArray(query);
            $scope.digit5Array.$loaded().then(function() {
                $scope.digit5Array.sort();
                newGuess();
            });
        };

        var newGuess = function() {
            var compareArray = []
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

            var resultsArray = [];

            // if there is only one number, only one query is needed, and it can be
            // assigned to the results array.
            // if there are two numbers, we need two queries, and the resulting arrays
            // need to be checked against each other to find zipcodes that are only
            // present in both arrays.

            if (compareArray.length === 1) {
                console.log("1!");
                resultsArray = compareArray[0];
                angular.forEach(compareArray[0], function(value, key) {
                    // console.log(value.$id);
                });
            } else if (compareArray.length === 2) {
                array1 = compareArray[0];
                array2 = compareArray[1];
                console.log(compareArray[0]);
                console.log(compareArray[1]);


            } else if (compareArray.length === 3) {
                console.log("3!");
                angular.forEach(compareArray[0], function(value, key) {
                    console.log(value);
                });
                angular.forEach(compareArray[1], function(value, key) {
                    console.log(value);
                });
                angular.forEach(compareArray[2], function(value, key) {
                    console.log(value);
                });

            } else if (compareArray.length === 4) {
                console.log("4!");
            } else if (compareArray.length === 5) {
                console.log("5!");
            }
            $scope.singleResult = resultsArray[Math.floor(Math.random() * resultsArray.length)];
            // console.log($scope.singleResult)
        }
    });
