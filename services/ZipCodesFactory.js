zipCodeApp.factory('ZipCodesFactory', function ZipCodesFactory() {

  var factory = {};

  factory.zipCodesFB = new Firebase('https://zipcodes-nathanyoung.firebaseio.com/');

  factory.zipCodesFB.on('value', function(snapshot) {
    factory.allZipCodes = snapshot.val();
    for (i = 0; i < factory.allZipCodes.length; i++) {
      console.log(factory.allZipCodes[i].city);
      console.log(factory.allZipCodes[i].population);
    }
  });

  return factory;

});
