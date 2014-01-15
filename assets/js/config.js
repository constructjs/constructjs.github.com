(function(w){

	var config = {
		"callback": function(){ init(); },
		"paths": {
			"commons": [
				"http://cdn.kdi.co/js/common/0.3.0/common-min"
			],
			"jquery": [
				"http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min"
			],
			"json2": [
				"http://cdnjs.cloudflare.com/ajax/libs/json2/20121008/json2.min",
				"http://cdn.kdi.co/js/json2/20121008/json2.min"
			],
			"underscore": [
				"http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min"
			],
			"handlebars": [
				"http://cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.0/handlebars.min"
			],
			"backbone": [
				"http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min"
			],
			"bootstrap-scrollspy": [
				"/assets/js/lib/bootstrap-scrollspy"
			],
			"showdown": [
				"http://cdnjs.cloudflare.com/ajax/libs/showdown/0.3.1/showdown.min",
				"http://cdn.kdi.co/js/showdown/0.3.1/showdown-min"
			],
			"backbone.app": [
				//"http://cdn.kdi.co/js/backbone.app/0.9.5/backbone.app-min",
				"/assets/js/libs/backbone.app"
			],
			"backbone.markdown": [
				"/assets/js/libs/backbone.markdown"
			],
			"helper-handlebars": [
				"/assets/js/helpers/handlebars"
			],
			"app-models": [
				"/assets/js/app/models"
			],
			"app-views": [
				"/assets/js/app/views"
			],
			"app-controllers": [
				"/assets/js/app/controllers",
			],
			"google-plus": [
				"https://apis.google.com/js/plusone"
			],
			"facebook": [
				"http://connect.facebook.net/en_US/all.js#xfbml=1"
			],
			"twitter": [
				"http://platform.twitter.com/widgets"
			]
		},
		"shim": {
			"backbone": {
				"deps": [
					"underscore",
					"jquery"
				],
				"exports": "Backbone"
			},
			"underscore": {
				"exports": "_"
			},
			"backbone.app": {
				"deps": [
					"backbone",
					"underscore",
					"jquery",
					"handlebars"
				]
			},
			"backbone.markdown": {
				"deps": [
					"backbone.app",
					"showdown"
				]
			},
			"helper-handlebars": {
				"deps": [
					"handlebars"
				]
			},
			"app-models": {
				"deps": [
					"backbone",
					"backbone.app",
					"underscore"
				]
			},
			"app-views": {
				"deps": [
					"backbone",
					"underscore",
					"jquery",
					"backbone.markdown",
					"handlebars",
					"app-models"
				]
			},
			"app-controllers": {
				"deps": [
					"backbone",
					"underscore",
					"jquery",
					"app-models",
					"app-views"
				]
			}
		},
		"deps": [
			"commons",
			"helper-handlebars",
			"app-models",
			"app-views",
			"app-controllers"
		]
	}

	w.config = config;

})(this.window)