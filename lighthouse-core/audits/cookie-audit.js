'use strict';

//const Audit = require('lighthouse').Audit;
const Audit = require('./audit');

//class LoadAudit extends Audit {
class CookieAudit extends Audit {
  static get meta() {
    return {
      //id: 'searchable-audit',
      id: 'cookie-audit',
      title: 'Cookie object',
      failureTitle: 'Cookie object is not returned',
      description: 'Used to capture the cookies on page.',
      // The name of the custom gatherer class that provides input to this audit.
      requiredArtifacts: ['CookieSearchable'],
    };
  }

  static audit(artifacts) {
    const loadMetrics = artifacts.CookieSearchable;
    var myJSON = JSON.stringify(loadMetrics);

    return {
      rawValue: myJSON,
      numericValue: loadMetrics,
      score: Number(1),
    };
  }
}

//module.exports = LoadAudit;
module.exports = CookieAudit;
