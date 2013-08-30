
// compile and add handlebars templates

'use strict';

define([
	'text!templates/monuments_list.hbs'
], function(monuments_list_template) {
	

	// TODO replace by real datas and rename to monuments_list
    var monuments_data = {
            monuments: [
            {"name": "Monument Name 01", "address": "1 rue machin", "image": "", "monument_article": "Château_de_Versailles"},
            {"name": "Monument Name 02", "address": "2 rue machin", "image": "", "monument_article": ""},
            {"name": "Monument Name 03", "address": "3 rue machin", "image": "", "monument_article": ""},
            {"name": "Monument Name 03", "address": "4 rue machin", "image": "", "monument_article": ""},
            {"name": "Monument Name 03", "address": "5 rue machin", "image": "", "monument_article": ""},
            {"name": "Monument Name 03", "address": "6 rue machin", "image": "", "monument_article": ""},
            {"name": "Monument Name 03", "address": "7 rue machin", "image": "", "monument_article": ""}
            ]
        };
	

	
	// compile templates
	var compiledMonumentsListTemplate = Handlebars.compile(monuments_list_template);
	
	// add generated HTML to the documents
    document.getElementById("monument-list-template").innerHTML = compiledMonumentsListTemplate(monuments_data);
	
});
