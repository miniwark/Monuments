
// use the geolocation API to retrieve actual coordinates
// see http://dev.w3.org/geo/api/spec-source.html
// and https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation


define(function () {
    //private

    var geo_options = {
        enableHighAccuracy: false, 
        maximumAge        : 300000,
        timeout           : 27000
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, geo_options});

    
    function successCallback(position) {
      // By using the 'maximumAge' option above, the position
      // object is guaranteed to be at most 10 minutes old.
    }

    function errorCallback(error) {
      // Update a div element with error.message.
    }

    //public
    return {
        latitude: "black",
        longitude: "unisize"
    }
});
