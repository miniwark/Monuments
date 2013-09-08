
// main script for the application lauched by /js/monuments.js

/*global require: false */


require([
    'app/geolocation',
    'app/templates',
    'app/address',
    'app/monument',
    'app/image'
],
function(
    geolocation,
    templates,
    address,
    monument,
    image
) {
    'use strict';

    geolocation.getPosition();
    address.getAddress();
    monument.getMonumentList();
    image.getThumbnails();
    templates.compileTemplates();
});
