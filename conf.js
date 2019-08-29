var setScore= require('./tests/setScore');
exports.config = {

  // change this to your USERNAME and AUTHKEY
  seleniumAddress: 'http://<yourusername>:<yourauthkey>@hub.crossbrowsertesting.com:80/wd/hub',

  // add more browsers to this array for more parllel tests!!
  capabilities: {

    // Cloud capabilities
    name: 'Protractor ToDo Example',
    user: "<yourusername>",
    password: "<yourauthkey>",
    record_video: 'true',
    record_network: 'false',

    // Device capabilities
    platform : 'Windows 10',           // Gets latest version by default
    browserName: 'Chrome'  // To specify version, add version: 'desired version'
  },

  specs: './tests/*.js',
  
  onComplete: function() { 
    browser.getSession().then(function(session){setScore(session.id_)})
  }
};
