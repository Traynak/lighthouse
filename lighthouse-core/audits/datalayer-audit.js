'use strict';

//const Audit = require('lighthouse').Audit;
const Audit = require('./audit');

//class LoadAudit extends Audit {
class DataLayerAudit extends Audit {
  static get meta() {
    return {
      //id: 'searchable-audit',
      id: 'datalayer-audit',
      title: 'DataLayer object',
      failureTitle: 'DataLayer object is not returned',
      description: 'Used to capture the digitalData object on page.',
      // The name of the custom gatherer class that provides input to this audit.
      requiredArtifacts: ['DataLayerSearchable'],
    };
  }

  static audit(artifacts) {
    const loadMetrics = artifacts.DataLayerSearchable;
    var myJSON = JSON.stringify(loadMetrics);

    return {
      rawValue: myJSON,
      numericValue: loadMetrics,
      score: Number(1),
    };
  }
}

//module.exports = LoadAudit;
module.exports = DataLayerAudit;
