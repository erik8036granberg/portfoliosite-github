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
	// stop lyd
	$("#effekt_kaninhop")[0].pause();

	// stop kanin move: kanin_ind-fra-siden
	$("#kanin_container").removeClass("kanin_ind_fra_siden");
	$("#kanin_container").addClass("kanin_inde");

	// stop kanin-animation: kanin_hop_fremad
	$("#kanin_sprite").removeClass("kanin_hop_fremad");
	$("#kanin_sprite").addClass("kanin_staar");

	//
	$("#kanin_sprite").on("click", kaninNed);
}

// - - - - - kanin_står- - - - -

function kaninNed() {
	console.log("kaninNed");

	$("#kanin_sprite").off("click", kaninNed);

	// Start kanin ned
	$("#kanin_container").removeClass("kanin_inde");
	$("#kanin_container").addClass("kanin_ned");
}
