# Getting Start with Protractor and CrossBrowserTesting

[Protractor](http://www.protractortest.org/#/) is a powerful end-to-end framework for [Angular](https://angularjs.org/) and Angular JS applications. Powered by [Selenium](http://www.seleniumhq.org/docs/), built on top of Javascripts language bindings, and optimized for Angular applications means its quick and easy to write and execute tests for even the biggest web apps. Combined with CBT, we can test our Angular application in the cloud across a myriad of different OS/Browser combinations. 

## Getting Started

Clone or download this repository. All the packages we need to get our scripts up and runnning are already in packages.json, so all we need to do to get our dependencies is run:

```
npm install
```

Once our dependendies are installed, let's take a look at what our configuration file is doing. There should be a file named 'conf.js' in the root of the cloned directory:

```
exports.config = {

  // change this to your USERNAME and AUTHKEY
  seleniumAddress: 'http://<yourusername>:<yourauthkey>@hub.crossbrowsertesting.com:80/wd/hub',

  // our Selenium capabilities, customized for CBT
  capabilities: {
    // CBT capabilities
    user: "<yourusername>",
    password: "<yourauthkey>",
    name: 'Protractor ToDo Example',
    record_video: 'true',
    record_network: 'true'     
    
    // Configuration-specific capabilities 
    browser_api_name : 'IE10', 
    os_api_name : 'Win7x64-C2', 
    browserName: 'internet explorer',
  },
  specs: './tests/*.js'
};
```

Notice where we've changed the Selenium address to be pointed at CrossBrowserTesting's hub as well as contain the credentials for your CBT account which can be found [within our appliation](https://app.crossbrowsertesting.com/selenium/run). We also create our capabilities object which contains CBT's OS and Browser API names. To find more configurations, you can always check our API. Lastly, we'll need to direct Protractor to the location of our tests, in this case, I've placed our specs in the 'tests' directory. In our example, we're testing a basic Angular "ToDo" app:


```
// spec.js
var webdriver = require('selenium-webdriver');
describe('Protractor Demo App', function() {
  it('handle our ToDos', function() {
    browser.get('http://crossbrowsertesting.github.io/todo-app.html');
    expect(browser.getTitle()).toEqual('Todo App - CrossBrowserTesting.com');
    
    var todo = element(By.name('todo-4'))
    todo.click();

    todo = element(By.name('todo-5'))
    todo.click();

    var textbox = element(By.id("todotext"));

    textbox.sendKeys("Get started with Protractor!");
    
    var addButton = element(By.id("addbutton"));
    addButton.click();

    var archive = element(By.linkText('archive'));
    archive.click();
  });
});
```

Not too much going on here, just some basic interaction with elements on our page, but we can quickly see how much easier Protractor makes generating end-to-end tests on an Angular application when compared to Javascript's WebDriver language bindings. Run our test with:

```
protractor conf.js
```

And watch Protractor report a successful spec! Flip over to [our app](https://app.crossbrowsertesting.com/selenium/run) to watch the recording of your test as well.f

## Running Tests in Parallel Browsers

Within Protractor, there are two forms of parallelism, multiple browsers and multiple specs. Within the downloaded directory, you should also see a file called 'conf_parallel.js':

```
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

  // the location of our specs
  specs: 'tests/spec.js'
};
```

Now executing Protractor on this configuration file will start up the same spec against all the browsers in the 'multiCapabilities' array. Flipping over to our app, you should see tests for Chrome 56 and Firefox 46 on Windows 10 running at the same time. Keep adding to your multiCapabilities array to maximize the number of tests you can run in parallel. 

## Running Parallel Specs

In addition to running specs to parallel browsers, we can run parallel specs. Only three lines need to change to our original configuration file to make this happen. You should see a third configuraton file called in this repository called 'conf_parallel_spec.js':

```
exports.config = {

  // change this to your USERNAME and AUTHKEY
  seleniumAddress: 'http://<yourusername>:<yourauthkey>@hub.crossbrowsertesting.com:80/wd/hub',

  // add more browsers to this array for more parllel tests!!
  capabilities: {
    shardTestFiles: true,     // allows specs to be executed in parallel.
    maxInstances: 2,          // total number of specs that can be run at once.
 
    // Cloud capabilities
    user: "<yourusername>",
    password: "<yourauthkey>",
     
    // Device capabilities
    name: 'Parallel Spec Example', 
    browser_api_name : 'IE10', 
    os_api_name : 'Win7x64-C2', 
    browserName: 'internet explorer',
    record_video: 'true',
    record_network: 'true'
  },
  
  specs: ['./tests/*.js']     // notice this is now an array
};
```

Now, tests from your tests directory will be run in parallel against the same configuration on CBT's side. Increasing the maxInstances will allow you to run even more tests at the same time. Great for executing an entire suite of tests in minimum time!

This was just a brief introduction to Protractor, but their API provides a full-scale integration for testing Angular applications. If you ever need any assistance in getting setup and running your scripts in our CBT environments, don't hestiate to [reach out to us](mailto:support@crossbrowsertesting.com). We're happy to help.
