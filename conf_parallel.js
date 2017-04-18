
exports.config = {

  // change this to your USERNAME and AUTHKEY
  seleniumAddress: 'http://<username>:<authkey>@hub.crossbrowsertesting.com:80/wd/hub',

  // add more browsers to this array for more parllel tests!!
  multiCapabilities: [{
    'name': 'Protractor Parallel Example',
    'browserName': 'chrome',
    'browser_api_name': 'Chrome56x64',
    'os_api_name': 'Win10'
  }, {
    'name': 'Protractor Parallel Example',
    'browserName': 'firefox',
    'browser_api_name': 'FF46x64',
    'os_api_name': 'Win10'
  }],

  //
  specs: ['tests/spec.js']
};
