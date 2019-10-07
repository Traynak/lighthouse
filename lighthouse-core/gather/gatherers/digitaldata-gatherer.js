'use strict';

//const Gatherer = require('lighthouse').Gatherer;
const Gatherer = require('./gatherer');
const Driver = require('../driver.js');

class DigitalDataSearchable extends Gatherer {
  afterPass(options) {
    const driver = options.driver;

    return driver.evaluateAsync('window.digitalData')
      // Ensure returned value is what we expect.
      .then(loadMetrics => {
        if (!loadMetrics || loadMetrics === undefined) {
          throw new Error('Unable to find load metrics in page');
        }
        return loadMetrics;
      });
  }
}

module.exports = DigitalDataSearchable;
