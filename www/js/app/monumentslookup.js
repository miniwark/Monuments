
// get the city monument list from Wikimedia monument datatbase
// and strip a few wiki tags
// https://commons.wikimedia.org/wiki/Commons:Monuments_database/API
// http://toolserver.org/~erfgoed/api/api.php
//
// Zepto.js is used to get JSONP data from toolserver 


'use strict';
 

define([], function() {
	
	var baseURL = 'http://toolserver.org/~erfgoed/api/api.php?';
	
	var params = $.param({
		format: 'json',
		action: 'search',
		srcontry: 'fr',  //TODO get this from coodinate
		srlang: 'fr',    //TODO get this from the phone
		coord: window.sessionStorage.getItem('position_latitude') + ',' + window.sessionStorage.getItem('position_longitude'),
		radius: '5000',  //TODO add a setting for this
		props: 'name|address|municipality|image'
	});
	
	var requestURL = baseURL + params + '&callback=?'
    
	$.getJSON(requestURL, function(monumentsData){
		var data = JSON.stringify(monumentsData);
		console.log(data)
		// TODO clean wiki formating like [[city]]
		// TODO sage to localstorage
	})

});

// example centered in Nice with a 5000m radius with the more usefull fields
// http://toolserver.org/~erfgoed/api/api.php?&format=json&action=search&srcountry=fr&srlang=fr&coord=43.69073,7.294788&radius=5000&props=name|address|municipality|image


// TODO clean the [[]] from the wiki syntax in the restults ...
// TODO maybe drop adresslookup ? we can work with long lat and radius
// or just use it for country lookup
// anyway this maybe usefull later for manual monument search
