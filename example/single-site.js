var isPorn = require('../');

isPorn('google.com', function(error, status) {
    console.log('google.com :', status);
});

isPorn('pornhub.com', function(error, status) {
    console.log('pornhub.com :', status);
});
