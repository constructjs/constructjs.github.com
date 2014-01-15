(function($, _, Backbone) {

	/* Main layout */
	APP.Layouts.Main = APP.Layout.extend({
		initialize: function( options ){

			this.set({
				"main": new APP.Views.Main({
					page: options.page
				})
			});

			return APP.Layout.prototype.initialize.call(this, options );
		}
	});

	APP.Views.Main = APP.Views.Markdown.extend({
		el: "#main",
		options: {
			mdRoot: "content/",
			data: false
		}
		/*
		initialize: function( options ){

			console.log( this );

			return APP.Views.Markdown.prototype.initialize.call(this, options );
		},

		render: function(){
			console.log( this );
			return APP.View.prototype.render.call( this );
		}
		*/
	});

	// Section views (duplicate as needed...)
	APP.Views.Section = APP.View.extend({
		el: "",
		events: {},
		initialize: function(model, options){},
		render: function(){}
	});

})(this.jQuery, this._, this.Backbone);