steal('can','./init.ejs','Vnexit/Vnexit.js','../models/login.js', function(can, initView){
    /**
     * @class Vnexit/login
	 * @alias Login   
     */
    return can.Control(
	/** @Static */
	{
		defaults : {}
	},
	/** @Prototype */
	{
		init : function(){
			this.element.html(initView({
				message: "Hello World from Login"
			}));
		},
		".form-horizontal submit": function(el,ev){
			var formData = $(".form-horizontal").formParams();
			var login = new Login();
			login.checkLogin(formData.username, formData.password);
		}
	});
});