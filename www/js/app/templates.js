
// compile and add handlebars templates

'use strict';

define([
	'text!templates/monuments_list.hbs'
], function(monuments_list_template) {
	
	// get the monuments_list from localStorage	
    var monuments_list = JSON.parse(window.localStorage.getItem('monuments_list'));
	
	// compile templates
	var compiledMonumentsListTemplate = Handlebars.compile(monuments_list_template);
	
	// add generated HTML to the documents
    document.getElementById("monument-list-template").innerHTML = compiledMonumentsListTemplate(monuments_list);
	
});
