'use strict';

var AddressList = require('./models/AddressList');

var request = require('request-promise');
var _ = require('lodash');

const RESOURCE_URL = process.env.RESOURCE_URL;

request({
  url: RESOURCE_URL,
  json: true
})
  .then(res=> {
    let addresses = _.slice(_.map(res, 'Address'), 0, 5);
    new AddressList(addresses)
      .parse()
      .then(res=> {
        console.log(res);
        // in res you have parsed list of Address objects (contains only parsed addresses)
      })
  });