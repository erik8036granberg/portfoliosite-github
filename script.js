// siden er loadet
$(window).on("load", startSkaerm);
console.log("Siden er loadet");

// - - - - - startSkaerm - - - - -

function startSkaerm() {
	console.log("startSkaerm");


	// - - - - - fold menu ud - - - - -
	$(".menuknap").on("click", function () {
		$(".dropdown-content").toggleClass("expanded");
	});

	// - - - - - fold menu ind hvis klikket - - - - -
	$(".menulink").on("click", function () {
		$(".dropdown-content").removeClass("expanded");
	});

	// - - - - - fold menu ind hvis musen flyttes væk - - - - -
	$(".nav-down").on("mouseleave", function () {
		$(".dropdown-content").removeClass("expanded");
	});
}
