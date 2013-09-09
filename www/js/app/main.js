
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

    $.when(geolocation.getPosition())
    .then(address.getAddress())
    .then(monument.getMonumentList())
    .then(image.getThumbnails())
    .then(templates.compileTemplates());
});
