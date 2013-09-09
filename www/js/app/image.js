
// get the thumbnailed image url from Wikimedia Commons from a file name
// use Wikimedia Commons API
// http://commons.wikimedia.org/w/api.php

/*jshint jquery:true */
/*global define: false */


define([], function () {
    'use strict';

    function _requestUrl(image) {
        // generate the external source URL
        var base_url = 'http://commons.wikimedia.org/w/api.php?';
        var params = $.param({
            format: 'json',
            action: 'query',
            titles: 'File:' + image,
            prop: 'imageinfo',
            iiprop: 'url',
            iiurlheight: '60'
        });
        var request_url = base_url + params + '&callback=?';
        return request_url;
    }

    function _saveThumbnailUrl(monument_list, monument) {
        return function(data) {
            for (var page_id in data.query.pages) {
                if (data.query.pages.hasOwnProperty(page_id)) { // JSHint ask this check
                    // it's a bit tricky here see last comment
                    monument.thumburl = data.query.pages[page_id].imageinfo[0].thumburl;
                }
            }
            // save thumurl in the localStorage
            // TODO A image display bug is around here
            var monument_list_string = JSON.stringify(monument_list);
            window.localStorage.setItem('monument_list', monument_list_string);
        }
    }

    function _errorHandler() {
        // TODO write a better error message
        console.error('Get Image Thumbnail Error');
    }

    function _getThumbnails() {
        // get the monument_list from localStorage
        var monument_list = JSON.parse(window.localStorage.getItem('monument_list'));
        // get the thumb url for each monument
        $.each(monument_list.monuments, function(index, monument) {
            if ((monument.image) && (!monument.thumburl)) { //monument have an image but thumburl is unknown
                var request_url = _requestUrl(monument.image);
                // get the JSONP data from the external source
                $.getJSON(request_url)
                    .done(_saveThumbnailUrl(monument_list, monument))
                    .fail(_errorHandler);
            }
        });
    }

    return {
        getThumbnails: _getThumbnails
    };

});


// the obtained json have a numbered property witch change depending on the query
// we trick this with the usage of for..in as we are expecting only one result from our query
// example result {"query":{"pages":{"16731921":{"pageid":16731921,"ns":6,"title": ...

// TODO try to get thumbnails of all the monuments in the same time instead of a loop
// this may be possible because the titles param accept multiple images
