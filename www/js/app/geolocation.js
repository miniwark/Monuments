
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
        console.log(error.code);
    }

    // check the geolocation every 5 minutes
    // we use a javascript timer insdead of geolocation.WatchPosition
    // to avoid unecessary battery usage
    // TODO move this in main.js

    function _getPosition() {
        // check the geolocation a first time and then every 5 minutes
        navigator.geolocation.getCurrentPosition(_savePosition, _errorHandler, geo_options);
        setTimeout(_getPosition, 300000);
    }
    //// start the geolocation cycle
    //geolocation();


    return {
        getPosition : _getPosition
    };
});
