/**
 * @license Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/** @type {LH.Config.Json} */
const analyticsConfig = {
  extends: 'lighthouse:default',
  passes: [{
    passName: 'defaultPass', //Needed to run custom Gatherers/Audits in the same pass
    gatherers: [
      `digitaldata-gatherer`,
      `datalayer-gatherer`,
      `cookie-gatherer`,
    ],
  }],
  audits: [
    'digitaldata-audit',
    'datalayer-audit',
    'cookie-audit',
  ],
}

module.exports = analyticsConfig;
