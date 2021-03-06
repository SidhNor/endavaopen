'use strict';

var http = require('request-promise');
var baseUrl = typeof window != 'undefined' ? window.location.origin : 'https://open-sidhnor.rhcloud.com';
http.baseUrl = baseUrl;

var PlayerApi = {
  getPlayers: function() {
    return http.get({url: '/player?limit=100&active=true', baseUrl: baseUrl})
  }
};

module.exports = PlayerApi;
