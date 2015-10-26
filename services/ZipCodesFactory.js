zipCodeApp.factory('ZipCodesFactory', function ZipCodesFactory() {
  var factory = {};

  factory.allZipCodes = Papa.parse('zipcodestest.csv', config)

  return factory;
});


// factory.allZipCodes = function
//
//   Papa.parse(fileInput.files[0], {
// 	complete: function(results) {
// 		console.log(results);
// 	}
// });



  // factory.currentZipCode = [];

  // still needs sorting out to receive zip code input
  // factory.addFirstChar = function() {
  //   factory.currentZipCode.push({ name: factory.studentName,
  //                         id: factory.students.length + 1,
  //                         signedIn: false });
  //   factory.studentName = null;
  // };
