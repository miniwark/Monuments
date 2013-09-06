
// get the country code & city by reverse geocoding
// use OpenStreetMap Nominatim datas hosted by MapQuest
// http://wiki.openstreetmap.org/wiki/Nominatim#Reverse_Geocoding_.2F_Address_lookup
// http://developer.mapquest.com/web/products/open/nominatim

/*global define: false */


define([], function() {
    'use strict';

    // generate the query address
    var base_url = 'http://open.mapquestapi.com/nominatim/v1/reverse.php?';
    var params = $.param({
        format: 'json',
        lat: window.localStorage.getItem('position_latitude'),
        lon: window.localStorage.getItem('position_longitude')
    });
    var request_url = base_url + params + '&json_callback=?';

    // get the JSONP data from the external source
    $.getJSON(request_url, function(jsonp) {
        // TODO take care of {error="Unable to geocode"} error : add an errorHandler
        // save the city and country in the localStorage
        window.localStorage.setItem('position_country', jsonp.address.country_code);
        window.localStorage.setItem('position_city', jsonp.address.city);
    });

});
