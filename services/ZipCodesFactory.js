zipCodeApp.factory('ZipCodesFactory', function ZipCodesFactory() {

  var factory = {};

  factory.allZipCodes = Papa.parse('zipcodestest.csv', config)

  return factory;
  
});
