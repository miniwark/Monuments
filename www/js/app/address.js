
// get the country code & city by reverse geocoding
// use OpenStreetMap Nominatim datas hosted by MapQuest
// http://wiki.openstreetmap.org/wiki/Nominatim#Reverse_Geocoding_.2F_Address_lookup
// http://developer.mapquest.com/web/products/open/nominatim

/*jshint jquery:true */
/*global define: false */


define([], function() {
    'use strict';

    function _requestUrl() {
        // generate the external source URL
        var base_url = 'http://open.mapquestapi.com/nominatim/v1/reverse.php?';
        var params = $.param({
            format: 'json',
            lat: window.sessionStorage.getItem('position_latitude'),
            lon: window.sessionStorage.getItem('position_longitude')
        });
        return base_url + params + '&json_callback=?';
    }

    function _saveAdress(data) {
        // save the city and country in sessionStorage
        window.sessionStorage.setItem('position_country', data.address.country_code)
        window.sessionStorage.setItem('position_city', data.address.city);
    }

    function _errorHandler() {
        // TODO write a better error message
        console.error('Get Address Error');
    }

    function _getAddress() {
        var request_url = _requestUrl();
        $.getJSON(request_url)
            .done(_saveAdress)
            .fail(_errorHandler);
    }

    return {
        getAddress: _getAddress
    };
});
