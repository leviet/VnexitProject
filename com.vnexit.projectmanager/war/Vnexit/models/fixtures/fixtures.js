// map fixtures for this application
steal("can/util/fixture", function(fixture) {

	var store = fixture.store(5, function(i){
		return {
			name: "login "+i,
			description: "login " + i
		}
	});

	var res= {
		'status': 200,
		'messagse': "Success",
	};
	
	fixture({
		'GET /logins' : store.findAll,
		'GET /logins/{id}' : store.findOne,
		'POST /logins' : store.create,
		'PUT /logins/{id}' : store.update,
		'DELETE /logins/{id}' : store.destroy
	});
	can.fixture("GET /action=login?username=admin&password=1234", function(original, response){
    response(200, "success", { json: {foo: "bar" } }, {})
  });
	return store;
});