'use strict';

class Address {

  constructor(data) {
    this.city_district = data.city_district;
    this.country = data.country;
    this.fias_id = data.fias_id;
    this.fias_level = data.fias_level;
    this.geo_lat = data.geo_lat;
    this.geo_lon = data.geo_lon;
    this.house = data.house;
    this.kladr_id = data.kladr_id;
    this.postal_code = data.postal_code;
    this.region = data.region;
    this.full_address = data.result;
    this.street = data.street;
  }

  getGeoLocation() {
    return {
      latitude: this.geo_lat,
      longitude: this.geo_lon
    }
  }

  getDistrict() {
    // TODO implement mapping district name to identifier in database
  }

  getNearestSubway() {
    // TODO implement nearest subway station searching
    // TODO implement calculating distance between nearest subway and house
    // TODO implement mapping subway name to identifier in database
  }

  getStepsCount() {
    // TODO implement calculating steps count
  }


}

module.exports = Address;