/**
  Copyright 2018 Google LLC.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
**/
'use strict';

var exports = module.exports = {};
var defaultIntent = require('./defaultIntent');
var graphIntent = require('./graphIntent');
var buyIntent = require('./buyIntent');

exports.setupFXAgent = function setupFXAgent () {
  // Register Handlers

  // Add Welcome & default intents
  let handlers = defaultIntent.handle;

  // Add intent for dealing with the graph
  Object.assign(handlers, graphIntent.handle);

  // Add intent for the buy item
  Object.assign(handlers, buyIntent.handle);

  return handlers;
};
