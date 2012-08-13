Crafty.scene("main", function() {

	var elements = [
		"src/components/ape.js",
        "src/entities/chicken.js",
        "src/interfaces/info.js"
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {	   
		sc['chicken'] = new Chicken();
		infc['info'] = new Info();
	});

});
