steal('can','./init.ejs','Vnexit/Vnexit.js', function(can, initView){
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
		}
	});
});