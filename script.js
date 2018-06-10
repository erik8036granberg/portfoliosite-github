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

// - - - - - kanin_hop_ind - - - - -

function kaninHopperInd() {
	console.log("kaninHopInd");

	// - - -

	// Start kanin move: kanin_ind-fra-siden
	$("#kanin_container").addClass("kanin_ind_fra_siden");

	// Start kanin-animation: kanin_hop_fremad
	$("#kanin_sprite").addClass("kanin_hop_fremad");

	// Start lyd: effekt_kaninhop
	$("#effekt_kaninhop")[0].play();
	$("#effekt_kaninhop")[0].volume = 0.1;
	document.getElementById("effekt_kaninhop").loop = true;

	// når container er flyttet
	$("#kanin_container").on("animationend", kaninStaar);
}

// - - - - - kanin_står- - - - -

function kaninStaar() {
	console.log("kaninStaar");

	$("#kanin_container").off("animationend", kaninStaar);
	// - - -
	// Snorken skrues ned
	$("#effekt_kaninhop")[0].pause();

	// Start kanin move: kanin_ind-fra-siden
	$("#kanin_container").removeClass("kanin_ind_fra_siden");
	$("#kanin_container").addClass("kanin_inde");

	// Start kanin-animation: kanin_hop_fremad
	$("#kanin_sprite").removeClass("kanin_hop_fremad");
	$("#kanin_sprite").removeClass("kanin_staar");

	//
	//	$("#kanin_container").on("animationend", kaninStaar);
}
