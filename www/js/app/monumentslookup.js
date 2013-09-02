
// get the city monument list from Wikimedia monument datatbase
// and strip a few wiki tags
// https://commons.wikimedia.org/wiki/Commons:Monuments_database/API
// http://toolserver.org/~erfgoed/api/api.php
//
// Zepto.js is used to get JSONP data from toolserver 


'use strict';
 

define(['txtwiki'], function(txtwiki) {

	// generate the lookup address
	var baseURL = 'http://toolserver.org/~erfgoed/api/api.php?';
	var params = $.param({
		format: 'json',
		action: 'search',
		srcontry: window.localStorage.getItem('position_country'),
		srlang: navigator.language,
		coord: window.localStorage.getItem('position_latitude') + ',' + window.localStorage.getItem('position_longitude'),
		radius: '1000',  //TODO add a setting for this
		//limit: 100, //TODO maybe add a limit in settings defaulted to 100 by toolserver
		props: 'name|address|municipality|image|monument_article'
	});
	var requestURL = baseURL + params + '&callback=?'
	
    // get the JSONP data from the external source
	$.getJSON(requestURL, function(jsonData){
		var monuments_list_raw = JSON.stringify(jsonData);
		// TODO clean wiki formating like [[city]]
		// or use address from nominatim ?

		// remove the wiki formating
		var monuments_list = txtwiki.parseWikitext(monuments_list_raw);

		// remove the supplementary adresses

		console.log(monuments_list);
		
		// save the monument list in the localStorage
		window.localStorage.setItem('monuments_list', monuments_list);
	})

});

// example centered in Nice with a 5000m radius with the most usefull fields
// http://toolserver.org/~erfgoed/api/api.php?&format=json&action=search&srcountry=fr&srlang=fr&coord=43.69073,7.294788&radius=5000&props=name|address|municipality|image
