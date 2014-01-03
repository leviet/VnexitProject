//js Vnexit/scripts/build.js

load("steal/rhino/rhino.js");
steal('steal/build',function(){
	steal.build('Vnexit/scripts/build.html',{to: 'Vnexit'});
});
