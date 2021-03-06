(function() {

	// Routers
	APP.Routers.Default = APP.Router.extend({
		data: {},
		initialize: function() {
			// every function that uses 'this' as the current object should be in here
			_.bindAll(this, 'index');
			//
			this.shareLinks();

		},
		routes: {
			"": "index",
			":page": "page"
		},
		index: function(){
			//console.log("I'm in index");
			//this.data
			this.layout = new APP.Layouts.Home({
				data: this.data,
				page: "Home"
			});

		},
		page: function( page ){
			//console.log("page");
			//this.data
			this.layout = new APP.Layouts.Page({
				data: this.data,
				page: page
			});
		},
		// add the social links
		shareLinks: function(){
			require(["facebook", "twitter", "google-plus"], function(){
				// done ;)
			});
		}

	});

})();
