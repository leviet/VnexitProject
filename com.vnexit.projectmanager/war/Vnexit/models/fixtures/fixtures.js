// map fixtures for this application
steal("can/util/fixture", function(fixture) {

	var store = fixture.store(5, function(i){
		return {
			name: "login "+i,
			description: "login " + i
		}
	});
	
	fixture({
		'GET /logins' : store.findAll,
		'GET /logins/{id}' : store.findOne,
		'POST /logins' : store.create,
		'PUT /logins/{id}' : store.update,
		'DELETE /logins/{id}' : store.destroy
	});

	return store;
});