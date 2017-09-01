
exports.config = {

  // change this to your USERNAME and AUTHKEY
  seleniumAddress: 'http://<username>:<authkey>@hub.crossbrowsertesting.com:80/wd/hub',

  // add more browsers to this array for more parllel tests!!
  multiCapabilities: [{
    'name': 'Protractor Parallel Example',
    'browserName': 'Chrome',      // Gets latest version by default
    'platform': 'Windows 10'      // To specify version, add 'version': 'desired version'
  }, {
    'name': 'Protractor Parallel Example',
    'browserName': 'Firefox',
    'platform': 'Windows 10'
  }],

  //
  specs: ['tests/spec.js']
};
