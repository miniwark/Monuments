
// get the city monument list from Wikimedia monument database and strip wiki tags
// https://commons.wikimedia.org/wiki/Commons:Monuments_database/API
// http://toolserver.org/~erfgoed/api/api.php
// See query_thumb.js for thumbnailed image

/*jshint jquery:true */
/*global define: false */


define(['txtwiki'], function(txtwiki) {
    'use strict';

    function _requestUrl() {
        // generate the external source URL
        var base_url = 'http://toolserver.org/~erfgoed/api/api.php?';
        var params = $.param({
            format: 'json',
            action: 'search',
            srcontry: window.localStorage.getItem('position_country'),
            srlang: navigator.language,
            coord: window.localStorage.getItem('position_latitude') + ',' + window.localStorage.getItem('position_longitude'),
            radius: '1000',  //TODO add a setting for this
            limit: 50, //TODO add a limit in settings
            props: 'name|address|municipality|image|monument_article'
        });
        return base_url + params + '&callback=?';
    }

    function _saveMonumentList(response) {
        $.each(response.monuments, function() {
            // add empty thumburl property
            this.thumburl = '';
            // remove the supplementary adresses of monuments
            var id_br = this.address.indexOf('<br');
            if (id_br !== -1) {
                this.address = this.address.slice(0, id_br);
            }
            //TODO upper the first letter of an address
            //TODO remove <br> in name
            //TODO convert Wiki like @@1@@
        });
        // remove the wiki formating
        var monument_list_string = JSON.stringify(response);
        var monument_list = txtwiki.parseWikitext(monument_list_string);
        // save the monument list in the localStorage
        window.localStorage.setItem('monument_list', monument_list);
    }

    function _getMonumentList() {
        // retur the neareaby monuments
        var request_url = _requestUrl();
        $.getJSON(request_url, _saveMonumentList);
    }

    return {
        getMonumentList: _getMonumentList
    };

});

// example centered in Nice with a 5000m radius with the most usefull fields
// http://toolserver.org/~erfgoed/api/api.php?&format=json&action=search&srcountry=fr&srlang=fr&coord=43.69073,7.294788&radius=5000&props=name|address|municipality|image
