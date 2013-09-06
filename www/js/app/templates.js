
// compile and add handlebars templates

/*global define: false */


define([
    'text!templates/monuments_list.hbs'
], function(monument_list_template) {
    'use strict';

    // get the monuments_list from localStorage
    var monument_list = JSON.parse(window.localStorage.getItem('monument_list'));

    // compile templates
    var compiledMonumentListTemplate = Handlebars.compile(monument_list_template);

    // add generated HTML to the documents
    document.getElementById("monument-list-template").innerHTML = compiledMonumentListTemplate(monument_list);

});
