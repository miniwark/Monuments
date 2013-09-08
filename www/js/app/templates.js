
// compile and add handlebars templates

/*global define: false */


define([
    'text!templates/monuments_list.hbs'
], function(monument_list_template) {
    'use strict';

    // compile the monument list template
    function _compileMonumentList() {
        // get the monuments_list from localStorage
        var monument_list = JSON.parse(window.localStorage.getItem('monument_list'));
        // compile monument list template
        var compiledMonumentListTemplate = Handlebars.compile(monument_list_template);
        // add the generated HTML to document
        document.getElementById("monument-list-template").innerHTML = compiledMonumentListTemplate(monument_list);

    }

    // compile the templates
    function _compileTemplates() {
        _compileMonumentList()
        // future templates go here
    }

    return {
        compileTemplates : _compileTemplates
    };
});
