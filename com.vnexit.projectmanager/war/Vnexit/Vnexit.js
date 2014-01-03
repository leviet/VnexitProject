steal(
	'Vnexit/login/create',
	'Vnexit/login/list',
	'./Vnexit.less',
	'./models/fixtures/fixtures.js',
function(LoginCreate, LoginList){
	
	new LoginList('#logins');
	new LoginCreate('#create');
})