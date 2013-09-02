
// get the country code & city by reverse geocoding
// use OpenStreetMap Nominatim datas hosted by MapQuest
// http://wiki.openstreetmap.org/wiki/Nominatim#Reverse_Geocoding_.2F_Address_lookup
// http://developer.mapquest.com/web/products/open/nominatim

'use strict';


define([], function() {

	// generate the lookup address
	var baseURL = 'http://open.mapquestapi.com/nominatim/v1/reverse.php?';
	var params = $.param({
		format: 'json',
		lat: window.localStorage.getItem('position_latitude'),
		lon: window.localStorage.getItem('position_longitude')
	});
	var requestURL = baseURL + params + '&json_callback=?'

    // get the JSONP data from the external source
	$.getJSON(requestURL, function(jsonData) {

        console.log(jsonData);
        // TODO take care of {error="Unable to geocode"} error : add a console.log
		// save the city and contry in the localStorage
		window.localStorage.setItem('position_country', jsonData.address.country_code);
		window.localStorage.setItem('position_city', jsonData.address.city);
	})
	
});
