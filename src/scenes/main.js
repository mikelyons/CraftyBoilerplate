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

	Crafty.e("2D, DOM, Color, Collision, Platform")
		.color("red")
		.attr({ w: 300, h: 30, y: 500 })

});
