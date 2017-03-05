'use strict';
const nslookup = require('nslookup');
const debug = require('debug')('is-porn');
const OPENDNS_IPS = [
    /67\.215\.65.\d{3}/gi,
    /146\.112\.61\.\d{3}/gi,
];

var isOpenDNS = function(ip) {
    return OPENDNS_IPS.some(function(regexp) {
        debug('trying', regexp);
        return regexp.test(ip);
    });
};

var isPorn = function(domain, callback) {
    nslookup(domain)
        .server('208.67.222.123')
        .type('a')
        .timeout(10 * 1000)
        .end(function(error, address) {
            if (error) return callback(error, null);
            debug('got ip', address[0], 'for', domain);
            return callback(null, isOpenDNS(address[0]));
        });
};

module.exports = isPorn;
