
// get the country code & city by reverse geocoding
// use OpenStreetMap datas hosted by MapQuest
// http://wiki.openstreetmap.org/wiki/Nominatim#Reverse_Geocoding_.2F_Address_lookup
// http://developer.mapquest.com/web/products/open/nominatim

'use strict';

define([], function() {

    // generate the lookup address
    var baseURL = 'http://open.mapquestapi.com/nominatim/v1/reverse.php?';
    var format = 'json';
    var latitude = window.sessionStorage.getItem('position_latitude');
    var longitude = window.sessionStorage.getItem('position_longitude');        
    var requestURL = baseURL + '&format=' + format + '&lat=' + latitude + '&lon=' + longitude;

	// parse JSON data from the external source asynchronously
	var req = new XMLHttpRequest();
	req.open('GET', requestURL, true);
	req.onreadystatechange = function() {
		if (req.readyState == 4 && req.status == 200) {
			var responseJSON = JSON.parse(req.responseText);
			// save the city in the sessionStorage
			window.sessionStorage.setItem('position_country', responseJSON.address.country_code);
			window.sessionStorage.setItem('position_city', responseJSON.address.city);
		}
	};
	req.send(null);
	
	//TODO use $.getJSON instead
	
});
