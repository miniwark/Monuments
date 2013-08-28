
// use the geolocation API to retrieve actual coordinates
// see http://dev.w3.org/geo/api/spec-source.html
// and https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation

'use strict';

define([], function() {
	
	// options for the geolocation API
	var geo_options = {
		enableHighAccuracy: false,
		maximumAge        : 60000,
		timeout           : 50000
	};
	
    function successCallback(position) {  
        //save latitude, longitude and timestamp in the sessionStorage
        
        window.sessionStorage.setItem('position_latitude', position.coords.latitude);
        window.sessionStorage.setItem('position_longitude', position.coords.longitude);
        window.sessionStorage.setItem('position_timestamp', position.timestamp);
        
       // console.log(window.sessionStorage['position_timestamp']);
        console.log(position.timestamp);
        
    }

    function errorCallback(error) {
        // TODO manage error messages
        console.log(error.code);
    }

	// check the geolocation every 5 minutes (maximumAge: 300000)
	navigator.geolocation.watchPosition(successCallback, errorCallback, geo_options);

});


//define([], function() {
//
//    var geo_options = {
//        enableHighAccuracy: false, 
//        maximumAge        : 300000,
//        timeout           : 27000
//    };
//
//    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, geo_options);
//
//    
//    function successCallback(position) {
//      // By using the 'maximumAge' option above, the position
//      // object is guaranteed to be at most 10 minutes old.
//    }
//
//    function errorCallback(error) {
//      // Update a div element with error.message.
//    }
//
//    //public
//    return {
//        latitude: "black",
//        longitude: "unisize"
//    }
//});

//define(function() {

    //var _latitude = null;
    //var _longitude = null;
    ////manage error

    //var _options = {
        //enableHighAccuracy: false, 
        //maximumAge        : 300000,
        //timeout           : 27000
    //};

    //function _successCallback(position) {
		//_latitude = position.coords.latitude;
        //_longitude = position.coords.longitude;
    //}

    //function _errorCallback(error) {
      //// Update a div element with error.message.
    //}
    
    //navigator.geolocation.getCurrentPosition(
        //_successCallback,
        //_errorCallback,
        //_options
    //);

    //return {
		//latitude: _latitude,
		//longitude: _longitude
	//}
//});
