
// compile and add handlebars templates


define([
	'text!templates/monuments.hbs'
], function(template_monuments) {
	

	// TODO replace by real datas
    monuments_data = {
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
	compiledTemplateMonuments = Handlebars.compile(template_monuments);
	
	// add generated HTML to the documents
    document.getElementById("monument-list-template").innerHTML = compiledTemplateMonuments(monuments_data);
	
});
