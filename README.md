is-porn
=======

A simple node-js module that identifies if a particular domain name has adult content.
Currently only works on node (doesn't support the browser yet).

### How does it work?

We first initiate a sacrifice an offering to our lord and saviour, Cthulhu, and then if the connection succeeds, we point our name servers to the flux capacitor, and when we get the uplink of 1.21 Gigawatts, we query the domain.

Okay okay, I'll tell you how it really works. OpenDNS has 'FamilyShield' DNS resolvers that block out domains that contain sexual or pornographic content.

We basically just an nslookup on the domain, and if the A name record gets directed to one of their servers instead of the original domain, we take it that it's blocked.

This implementation isn't perfect yet, so please don't depend on it. I won't take responsibility if somebody's kid see's something they're not supposed to see (e.e ).

## How do I use it?

``` sh
npm install is-porn

or

yarn add is-porn
```

and then use it:

``` js
const isPorn = require('is-porn');
isPorn('adult-site.com', function(error, status) {
    console.log('adult-site.com :', status);
});
```

## Contribute
Think you can make it better or fix any bugs? Try your hand at it and send in a pull-request or create an issue.

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
