var isPorn = require('../');
const SITES = [
    'google.com',
    'pornhub.com',
    'facebook.com',
    'xvideos.com',
    'msn.com'
];

SITES.forEach(function(site) {
    isPorn(site, function(error, status) {
        console.log(site, ':', status);
    });
});
