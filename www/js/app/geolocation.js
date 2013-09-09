
// use the HTML5 geolocation API to retrieve actual coordinates
// every 5 minutes and save them in the sessionStorage
//
// We use setTimeout instead of geolocation.WatchPosition to avoid unecessary battery usage

/*global define: false */


define([], function() {
    'use strict';

    var geo_options = {
        // options for the geolocation API
        enableHighAccuracy: false,
        maximumAge        : 300000,
        timeout           : 30000
    };

    function _savePosition(position) {
        //save latitude and longitude in the localStorage
        window.localStorage.setItem('position_latitude', position.coords.latitude);
        window.localStorage.setItem('position_longitude', position.coords.longitude);
    }

    function _errorHandler(error) {
        // TODO manage error messages
        console.error(error.code);
    }

    // we avoid to use geolocation.WatchPosition
    // to avoid unecessary battery usage

    function _getPosition() {
        // check the geolocation
        navigator.geolocation.getCurrentPosition(_savePosition, _errorHandler, geo_options);
    }

    return {
        getPosition : _getPosition
    };
});
