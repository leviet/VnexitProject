//js Vnexit/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs", function(DocumentJS){
	DocumentJS('Vnexit/index.html', {
		out: 'Vnexit/docs',
		markdown : ['Vnexit', 'steal', 'jquerypp', 'can', 'funcunit'],
		parent : 'Vnexit'
	});
});