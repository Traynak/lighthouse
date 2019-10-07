'use strict';

//const Audit = require('lighthouse').Audit;
const Audit = require('./audit');

class DigitalDataAudit extends Audit {
  static get meta() {
    return {
      id: 'digitaldata-audit',
      title: 'digitalData object',
      failureTitle: 'digitalData object is not returned',
      description: 'Used to capture the digitalData object on page.',
      // The name of the custom gatherer class that provides input to this audit.
      requiredArtifacts: ['DigitalDataSearchable'],
    };
  }

  static audit(artifacts) {
    const loadMetrics = artifacts.DigitalDataSearchable;
    var myJSON = JSON.stringify(loadMetrics);

    return {
      rawValue: myJSON,
      numericValue: loadMetrics,
      score: Number(1),
    };
  }
}

module.exports = DigitalDataAudit;
