'use strict';

var http = require('request-promise');
var baseUrl = typeof window != 'undefined' ? window.location.origin : 'https://open-sidhnor.rhcloud.com';
http.baseUrl = baseUrl;

var standardTournamentId = /*4;*/'572adeea37cbe768225e1206';
var doubleTournamentId = /*2;*/'572adede37cbe768225e1205';

var TournamentApi = {
  getStandardTournament: function() {
    return http.get({url: '/tournament/' + standardTournamentId, baseUrl: baseUrl})
  },

  getDoublesTournament: function() {
    return http.get({url: '/tournament/' + doubleTournamentId, baseUrl: baseUrl})
  },

  getRounds: function() {
    return http.get({url: '/round', baseUrl: baseUrl});
  },

  getMatches: function() {
    return http.get({url: '/match', baseUrl: baseUrl});
  },

  getDoubleMatches: function() {
    return http.get({url: '/doublematch', baseUrl: baseUrl});
  }

};

module.exports = TournamentApi;
