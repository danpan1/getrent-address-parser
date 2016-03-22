'use strict';

var Address = require('./Address');

var request = require('request-promise');
var _ = require('lodash');

class AddressList {

  constructor(addresses) {
    this.DADATA_URL = 'https://dadata.ru/api/v2/clean/address';
    this.parsed_addresses = [];
    this.source_addresses = addresses;
  }

  parse() {
    return request({
      method: 'POST',
      url: this.DADATA_URL,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${process.env.TOKEN}`,
        "X-Secret": `${process.env.XSECRET}`
      },
      body: {
        data: _.map(this.source_addresses, address=> {
          return [`Москва ${address}`]
        }),
        structure: ['ADDRESS']
      },
      json: true
    })
      .then(res=> {
        _.each(res, parsed_address=> {
          (parsed_address.qc == 0 || parsed_address.qc == 1) && this.parsed_addresses.push(new Address(parsed_address));
        });
        return this;
      });
  }

}

module.exports = AddressList;