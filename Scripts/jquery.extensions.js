$.extend({
	// Get object of URL parameters
	//		var allVars = $.getUrlVars();
	getUrlVars : function() {
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for ( var i = 0; i < hashes.length; i++) {
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	},
	// Getting URL var by its name
	//		var byName = $.getUrlVar('name');
	getUrlVar : function(name) {
		return $.getUrlVars()[name];
	}
});