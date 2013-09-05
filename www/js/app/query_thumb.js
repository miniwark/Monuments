
// get the thumbnailed image url from Wikimedia Commons from a file name
// use Wikimedia Commons API
// http://commons.wikimedia.org/w/api.php

/*jshint jquery:true */
/*global define: false */


define([], function () {
    'use strict';

    function getRequestURL(image) {
        // generate the external source URL
        var baseURL = 'http://commons.wikimedia.org/w/api.php?';
        var params = $.param({
            format: 'json',
            action: 'query',
            titles: 'File:' + image,
            prop: 'imageinfo',
            iiprop: 'url',
            iiurlheight: '60'
        });
        var requestURL = baseURL + params + '&callback=?';
        return requestURL;
    }

    // get the monuments_list from localStorage
    var monuments_list = JSON.parse(window.localStorage.getItem('monuments_list'));

    // get the thumb url for each monument
    $.each(monuments_list.monuments, function(index, monument) {
        if ((monument.image)&&(!monument.thumburl)) { //monument have an image but thumburl is unknown
            var requestURL = getRequestURL(monument.image);
            // get the JSONP data from the external source
            $.getJSON(requestURL, function(jsonData) {
                // get the image thumb url and add it to the monument object
                for (var pageid in jsonData.query.pages) {
                    if (jsonData.query.pages.hasOwnProperty(pageid)) { // JSHint ask this
                        // it's a bit tricky here see last comment
                        var thumburl = jsonData.query.pages[pageid].imageinfo[0].thumburl;
                        monument.thumburl = thumburl;
                        // save the localStorage (inside getJSON JSONP it's async)
                        var monuments_list_string = JSON.stringify(monuments_list);
                        window.localStorage.setItem('monuments_list', monuments_list_string);
                    }
                }
            });
        }
    });

});


// the obtained json have a numbered property witch change depending on the query
// we trick this with the usage of for..in as we are expecting only one result from our query
// example result {"query":{"pages":{"16731921":{"pageid":16731921,"ns":6,"title": ...

// TODO try to get thumbnails of all the monuments in the same time instead of a loop
// this may be possible because the titles param accept multiple images
