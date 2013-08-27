
// configure and load javascripts requirements with RequireJS
// import external libraries and the main script


require.config({
    baseUrl: 'js/lib',
    paths: {
        'app': '../app',
        'templates': '../../templates'
    },
    shim: {
		handblebars: { exports: 'Handlebars'}
	}
});

require([
    'app/main',
    'handlebars', 
    'l10n', 
//    'app/geolocation'
],
function() {
	
//	var latitude = Geolocation.latitude;
//	console.log("fin"+latitude)
});

// we follow the Revealing Module Pattern for app modules
