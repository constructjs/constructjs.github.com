(function(){
		
	config = {
		"callback": function(){ init();}, 
		"paths": {
			"jquery": [
				"http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min"
			],
			"json2": [
				"http://cdnjs.cloudflare.com/ajax/libs/json2/20121008/json2.min"
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
				"http://cdn.kdi.co/js/backbone.app/0.9.0/backbone.app-min"
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
				"/assets/js/app/controllers"
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
			"bootstrap-scrollspy": {
				"deps": [
					"jquery"
				]
			},
			"backbone.app": {
				"deps": [
					"backbone",
					"underscore",
					"jquery",
					"handlebars"
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
			"jquery",
			"json2",
			"underscore",
			"backbone",
			"handlebars",
			"bootstrap-scrollspy",
			"showdown",
			"backbone.app",
			"helper-handlebars",
			"app-models",
			"app-views",
			"app-controllers"
		]
	}

})()