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
    record_network: 'true',
    
    // Device capabilities
    browser_api_name : 'IE10', 
    os_api_name : 'Win7x64-C2', 
    browserName: 'internet explorer'    
  },
  
  specs: './tests/*.js'
};
