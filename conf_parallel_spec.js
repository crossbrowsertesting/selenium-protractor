exports.config = {

  // change this to your USERNAME and AUTHKEY
  seleniumAddress: 'http://<yourusername>:<yourauthkey>@hub.crossbrowsertesting.com:80/wd/hub',

  // add more browsers to this array for more parllel tests!!
  capabilities: {
    shardTestFiles: true,     // allows specs to be executed in parallel.
    maxInstances: 2,          // total number of specs that can be run at once.

    // Cloud capabilities
    name: 'Parallel Spec Example',
    user: "<yourusername>",
    password: "<yourauthkey",
    record_video: 'true',
    record_network: 'false',

    // Device capabilities
    platform : 'Windows 7',
    browserName: 'Internet Explorer'

  },

  specs: ['./tests/*.js']     // notice this is now an array
};
