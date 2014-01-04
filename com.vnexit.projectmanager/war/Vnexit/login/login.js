steal('can','./init.ejs','Vnexit/Vnexit.js','Vnexit/models/login.js', function(can, initView,Vnexit, Login){
    /**
     * @class Vnexit/login
	 * @alias Login   
     */
    return can.Control(
	/** @Static */
	{
		defaults : {
			login: Login
		}
	},
	/** @Prototype */
	{
		init : function(){
			this.element.html(initView({
				message: "Hello World from Login"
			}));
		},
		".form-horizontal submit": function(el,ev){
			ev.preventDefault();
			var formData = $(".form-horizontal").formParams();
			var result = this.options.login.checkLogin(formData.username, formData.password);
			result.done(function(data){
				data = JSON.parse(data);
				alert("Dang nhap thanh cong, xin chao"+ data.username);
			});
			result.fail(function(){
				alert("Sai ten dang nhap hoac mat khau");
			});
		}
	});
});