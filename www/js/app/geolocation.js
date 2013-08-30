
// use the HTML5 geolocation API to retrieve actual coordinates
// every 5 minutes and save them in the sessionStorage
//
// We use setTimeout instead of geolocation.WatchPosition to avoid unecessary battery usage
// We use sessionStorage instead of localStrorage for better privacy

'use strict';

define([], function() {
	
	var geo_options = {
		// options for the geolocation API
		enableHighAccuracy: false,
		maximumAge        : 300000,
		timeout           : 30000
	};
   	
    function savePosition(position) {
		//save latitude and longitude in the sessionStorage
        window.sessionStorage.setItem('position_latitude', position.coords.latitude);
        window.sessionStorage.setItem('position_longitude', position.coords.longitude);
    }

    function errorHandler(error) {
        // TODO manage error messages
        console.log(error.code);
    }

	// check the geolocation every 5 minutes
	// we use a javascript timer insdead of geolocation.WatchPosition
	// to avoid unecessary battery usage
	
	function geolocation() {
		// check the geolocation a first time and then every 5 minutes
		navigator.geolocation.getCurrentPosition(savePosition, errorHandler, geo_options);
		setTimeout(geolocation, 300000);
	}
	// start the geolocation cycle
	geolocation();
	
	// TODO move the cycling on main.js

});
