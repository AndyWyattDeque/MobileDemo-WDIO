import AxeWebdriverIO from '@axe-core/webdriverio';

export const config: WebdriverIO.Config = {
  capabilities: [],
  logLevel: 'debug',
  bail: 0,
  baseUrl: 'https://workshop2.dequelabs.com/',
  waitforTimeout: 15000,
  connectionRetryTimeout: 180000,
  connectionRetryCount: 3,
  services: [],
  // Framework you want to run your specs with.
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 180000,
  },
  before: function (capabilities, specs, browser) {
    //require('ts-node').register({ files: true});
    // Creates a new AxeWebdriverIO instance and accepts browser object as argument
    const axeWdio = new AxeWebdriverIO({
      client: browser
    });
    //Adds the get axe results command to the browser so it can be used in our specs
    //browser.addCommand('getAxeResults', function () {
    // return axeWdio.analyze();
    //});
},
}