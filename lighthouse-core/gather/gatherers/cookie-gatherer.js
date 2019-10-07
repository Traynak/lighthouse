'use strict';

//const Gatherer = require('lighthouse').Gatherer;
const Gatherer = require('./gatherer');
const Driver = require('../driver.js');

class CookieSearchable extends Gatherer {
  afterPass(options) {
    const driver = options.driver;
    //await this.sendCommand('Network.getResponseBody', {requestId});
    //const r_getcookies = await this.sendCommand('Network.getCookies');
    //const r_getAllCookies = await this.sendCommand('Network.getAllCookies');
    return driver.sendCommand('Network.getAllCookies')
      .then(loadMetrics => {
        if (!loadMetrics || loadMetrics === undefined) {
          throw new Error('Unable to find load metrics in page');
        }
        return loadMetrics;
      });
  }
}

//module.exports = TimeToSearchable;
module.exports = CookieSearchable;
