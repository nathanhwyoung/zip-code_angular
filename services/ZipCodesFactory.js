zipCodeApp.factory('ZipCodeFactory', function ZipCodeFactory() {
  var factory = {};
  // factory.allZipCodes = Papa.parse(zipcodestest.csv, config)

  Papa.parse(fileInput.files[0], {
	complete: function(results) {
		console.log(results);
	}
});

  factory.currentZipCode = [];

  // still needs sorting out to receive zip code input
  // factory.addFirstChar = function() {
  //   factory.currentZipCode.push({ name: factory.studentName,
  //                         id: factory.students.length + 1,
  //                         signedIn: false });
  //   factory.studentName = null;
  // };

  return factory;
});
