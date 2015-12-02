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



// for(i=0; i < $scope.compareArray.length; i++) {
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






// FOR COMPARE 2
// console.log($scope.compareArray[0]);
// console.log($scope.compareArray[1]);

// console.log($scope.compareArray[0].length);
// for(var i = 0, i < $scope.compareArray[0].length, i++) {
//   console.log($scope.compareArray[0][i]);
// }

// angular.forEach($scope.compareArray[0], function(value, key, obj) {
//   console.log(obj);
// });
