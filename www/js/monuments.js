
// configure and load javascripts requirements with RequireJS
// import external libraries and the main script

'use strict';

require.config({
    baseUrl: 'js/lib',
    paths: {
        'app': '../app',
        'templates': '../../templates'
    },
    shim: {
		handblebars: { exports: 'Handlebars'},
		txtwiki: { exports: 'txtwiki'},
		zepto: { exports: '$' }
	}
});

require([
    'app/main',
    'handlebars', 
    'l10n',
    'txtwiki',
    'zepto'
],
function() {
	//
});
