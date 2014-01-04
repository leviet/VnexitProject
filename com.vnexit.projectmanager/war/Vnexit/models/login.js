steal('can', function (can) {
	/**
	 * @constructor Vnexit/models/login
	 * @alias Login
	 * @parent Vnexit
	 * @inherits can.Model
	 *
	 * Wraps backend login services.
	 */
	return can.Model(
	/* @static */
	{
		/**
 		 * Find all logins
		 */
		findAll : "GET /logins",
		/**
 		 * Find one login
		 */
		findOne : "GET /logins/{id}",
		/**
 		 * Create a login
		 */
		create : "POST /logins",
		/**
		 * Update a login
		 */
		update : "PUT /logins/{id}",
		/**
		 * Destroy a login
		 */
		destroy : "DELETE /logins/{id}",

		checkLogin: function(username, password){
			var result={};
			result.status=200;
			result.messagse="Dang nhap thanh cong";
			result.role="admin";
			result.username=username;
			return result;
		}
	},
	/* @Prototype */
	{});
});