steal('Vnexit/login','funcunit', function( Login, S ) {

	module("Vnexit/login", { 
		setup: function(){
			S.open( window );
			$("#qunit-test-area").html("<div id='login'></div>")
		},
		teardown: function(){
			$("#qunit-test-area").empty();
		}
	});
	
	test("updates the element's html", function(){
		new Login('#login');
		ok( $('#login').html() , "updated html" );
	});

});