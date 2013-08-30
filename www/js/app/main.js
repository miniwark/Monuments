
// main script for the application lauched by /js/monuments.js

'use strict';

require([
	'app/templates',
	'app/geolocation',
	'app/addresslookup',
	'app/monumentslookup',
],
function() {
	//
});


// TODO:
// - convert modules to Revealing Module Pattern
// - move timers and events trigers here
// in particular move the 5 minutes geolocation cycle here
// and add a page refresh triger here if location change
// - maybe move position from sessionstorage to localstorage
// so the app have a fallback position will geting the new one
