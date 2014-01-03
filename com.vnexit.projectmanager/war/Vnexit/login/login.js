steal('can','./init.ejs', function(can, initView){
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