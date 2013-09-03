
// get the thumbnailed image url from Wikimedia Commons from a file name
// use Wikimedia Commons API
// http://commons.wikimedia.org/w/api.php

'use strict';


define([], function() {

    	// generate the lookup address
	    var baseURL = 'http://commons.wikimedia.org/w/api.php?';
	    var params = $.param({
		    format: 'json',
    		action: 'query',
    		titles: 'File:' + image_name,
    		prop: 'imageinfo',
    		iiprop: 'url',
    		iiurlheight: '60'		
    	});
    	var requestURL = baseURL + params + '&callback=?'

        // get the JSONP data from the external source
	    $.getJSON(requestURL, function(jsonData) {
		    // get the image thumb url
            for ( var pageid in jsonData.query.pages) {
		        var image_thumburl = jsonData.query.pages[pageid].imageinfo[0].thumburl;
		    }
	    });
	    return image_thumburl;

});

// the obtained json have a numbered property witch change depending on the query
// we trick this with the usage of for..in as we are expecting only one result from our query
// example result {"query":{"pages":{"16731921":{"pageid":16731921,"ns":6,"title": ...

// TODO try to get thumbnails of multiples monuments in the same time instead of a loop
