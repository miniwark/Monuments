
// main script for the application lauched by /js/monuments.js

/*global require: false */


require([
    'app/geolocation',
    'app/templates',

    'app/query_address',
    'app/query_monuments',
    'app/query_thumb'
],
function(geolocation, templates) {
    'use strict';

    geolocation.getPosition();
    templates.compileTemplates();
});
