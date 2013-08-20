
// configure and load javascripts requirements with RequireJS

require.config({
    baseUrl: 'js/lib',
    paths: {
        'app': '../app'
    }
});

require([
    'handlebars', 
    'l10n', 
    'app/geolocation'
    ], 
function($) {
});

// please follow the Revealing Module Pattern for app modules
