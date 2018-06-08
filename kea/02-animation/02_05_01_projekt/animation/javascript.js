// - - - - - - - - sideLoad - - - - - - - -

$(window).on("load", sideLoad);



function sideLoad() {
	console.log("sideLoad!");

	// vis/skjul start
	$("#startbillede").addClass("vis");
	$("#mobil_container").addClass("skjul");
	$("#baggrund_side").addClass("skjul");
	$("#send_til_mig").addClass("skjul");
	$("#ogsaa_til_mig").addClass("skjul");
	$("#delknap").addClass("skjul");
	$("#gemknap").addClass("skjul");
	$("#konsekvens_gem_wrapper").addClass("skjul");
	$("#konsekvens_del_wrapper").addClass("skjul");
	$("#privatsnak").addClass("skjul");

	$("#startknap").addClass("puls");

	// gå til startbillede
	startBillede();
}

// - - - - - - - - Scene startBillede - - - - - - - -

function startBillede() {
	console.log("startBillede");

	// Der er klikket på startknap
	$("#startknap").on("click", startknapKlik);
}

function startknapKlik() {
	console.log("startknapKlik!");

	// Start knaplyd effekt_bank
	$("#game_start")[0].play();

	// gå til eleverInd efter tid
	setTimeout(eleverInd, 500);
}

// - - - - - - - - Scene eleverInd - - - - - - - -

function eleverInd() {
	console.log("eleverInd!");

	$("#startknap").off("click", startknapKlik);

	//	Startbillede fades
	$("#startbillede").addClass("fadeout");

	$("#zara_container").addClass("zara_sidder_possition");
	$("#zara_sprite").addClass("zara_sit");

	//	Brian & anders ind
	$("#brian_container").addClass("brian_move_right");
	$("#anders_container").addClass("anders_move_right");

	$("#brian_sprite").addClass("brian_stand");

	$("#anders_sprite").addClass("anders_walk_cycle");

	//	klokkelyd
	$("#school_bell")[0].play();

	//  Trigger - Når lyden Brian er ved sidde possition
	$("#brian_container").on("animationend", alle_saetter_sig);

}

function alle_saetter_sig() {
	console.log("alle_saetter_sig!")

	$("#brian_container").off("animationend", alle_saetter_sig);

	$("#startbillede").removeClass("vis");
	$("#startbillede").addClass("skjul");

	$("#anders_container").removeClass("anders_move_right");
	$("#anders_container").addClass("anders_sidder_possition");

	$("#brian_container").removeClass("brian_move_right");
	$("#brian_container").addClass("brian_sidder_possition");

	$("#anders_sprite").removeClass("anders_walk_cycle");
	$("#anders_sprite").addClass("anders_sit");

	$("#brian_sprite").removeClass("brian_stand");
	$("#brian_sprite").addClass("brian_sit");

	setTimeout(lyd_mobil, 1500);
}

function lyd_mobil() {
	console.log("lyd_mobil!")

	$("#mobil")[0].play();
	$("#anders_container").addClass("anders_mobil_ryster");

	setTimeout(mobilPossition, 1500);
}


// - - - - - - - - Scene MobilFrem - - - - - - - -

function mobilPossition() {
	console.log("mobilPossition!")

	$("#anders_container").removeClass("anders_mobil_ryster");

	$("#anders_sprite").removeClass("anders_sit");
	$("#anders_sprite").addClass("anders_mobil_frame");

	$("#mobil_container").removeClass("skjul");
	$("#mobil_container").addClass("vis");

	$("#mobil_container").addClass("mobil_possition");
	$("#mobil_sprite").addClass("vis_besked");

	$("#zoomframe").addClass("mobil_frem_zoom");

	setTimeout(mobilFrem, 1000);
}

function mobilFrem() {
	console.log("mobilFrem!")


	$("#mobil_container").addClass("sving_mobil_frem");

	setTimeout(mobilBesked, 1500);
}

// - - - - - - - - Scene mobilBesked - - - - - - - -

function mobilBesked() {
	console.log("mobilBesked!")

	$("#zoomframe").removeClass("mobil_frem_zoom");
	$("#zoomframe").addClass("mobil_besked_zoom");

	setTimeout(mobilBillede, 2750);
}

// - - - - - - - - Scene mobilBillede - - - - - - - -

function mobilBillede() {
	console.log("mobilBillede!")

	$("#mobil_sprite").removeClass("vis_besked");
	$("#mobil_sprite").addClass("vis_billede");

	setTimeout(VennerVilHa, 2000);
}

// - - - - - - - - Scene vennerVilHa - - - - - - - -

function VennerVilHa() {
	console.log("VennerVilHa!")

	$("#zoomframe").removeClass("mobil_besked_zoom");
	$("#zoomframe").addClass("venner_vil_ha_zoom");

	$("#baggrund").addClass("skjul");
	$("#baggrund_side").removeClass("skjul");
	$("#baggrund_side").addClass("vis");

	$("#zara_container").removeClass("zara_sidder_possition");
	$("#zara_container").addClass("zara_vil_ha_possition");

	$("#zara_sprite").removeClass("zara_sit");
	$("#zara_sprite").addClass("zara_front");

	$("#brian_container").removeClass("brian_sidder_possition");
	$("#brian_container").addClass("brian_vil_ha_possition");

	$("#brian_sprite").removeClass("brian_sit");
	$("#brian_sprite").addClass("brian_front");

	VennerVilHaSlide()
}

function VennerVilHaSlide() {
	console.log("VennerVilHaSlide!")

	$("#zara_container").addClass("zara_slide");
	$("#brian_container").addClass("brian_slide");

	$("#send_til_mig").removeClass("skjul");
	$("#send_til_mig").addClass("vis");
	$("#ogsaa_til_mig").removeClass("skjul");
	$("#ogsaa_til_mig").addClass("vis");

	setTimeout(VennerVilHaTalebobler, 2000);
}

function VennerVilHaTalebobler() {
	console.log("VennerVilHaTalebobler!")

	$("#send_til_mig").addClass("send_til_mig_vis");

	$("#sendtilmig_lyd")[0].play();

	setTimeout(VennerVilHaTalebobler2, 2000);
}

function VennerVilHaTalebobler2() {
	console.log("VennerVilHaTalebobler2!")

	$("#ogsaa_til_mig").addClass("ogsaa_til_mig_vis");

	$("#ogstilmig_lyd")[0].play();

	setTimeout(mobilValg, 2000);
}

function mobilValg() {
	console.log("mobilValg!")

	$("#baggrund_side").removeClass("vis");
	$("#baggrund_side").addClass("skjul");
	$("#baggrund").removeClass("skjul");
	$("#baggrund").addClass("vis");

	$("#zara_container").removeClass("zara_vil_ha_possition");
	$("#zara_container").addClass("zara_sidder_possition");

	$("#brian_container").removeClass("brian_vil_ha_possition");
	$("#brian_container").addClass("brian_sidder_possition");

	$("#zoomframe").removeClass("venner_vil_ha_zoom");
	$("#zoomframe").addClass("mobil_besked_zoom");

	setTimeout(mobilKnapper, 2000);

}

function mobilKnapper() {
	console.log("mobilKnapper!")

	$("#mobil_sprite").removeClass("vis_billede");
	$("#mobil_sprite").addClass("vis_nedtonet_mobil");

	$("#gemknap").removeClass("skjul");
	$("#gemknap").addClass("vis");
	$("#gemknap").addClass("gem_knap_placering");
	$("#gemknap").addClass("knappuls")


	$("#delknap").removeClass("skjul");
	$("#delknap").addClass("vis");
	$("#delknap").addClass("del_knap_placering");
	$("#delknap").addClass("knappuls");

	// Der er klikket på gem
	$("#gemknap").on("click", gemknapKlik);

	// Der er klikket på del
	$("#delknap").on("click", delknapKlik);
}

function gemknapKlik() {
	console.log("gemknapKlik!");

	$("#gemknap").off("click", gemknapKlik);
	$("#delknap").off("click", delknapKlik)

	// Start knaplyd effekt_bank
	$("#mobil")[0].play();

	setTimeout(gemKonsekvens, 500);
}

function delknapKlik() {
	console.log("delknapKlik!");

	$("#delknap").off("click", delknapKlik);
	$("#gemknap").off("click", gemknapKlik);

	// Start knaplyd effekt_bank
	$("#mobil")[0].play();

	setTimeout(delKonsekvens, 500);
}


function gemKonsekvens() {
	console.log("gemKonsekvens!");

	$("#gemknap").removeClass("vis");
	$("#gemknap").addClass("skjul");
	$("#delknap").removeClass("vis");
	$("#delknap").addClass("skjul");

	$("#zoomframe").removeClass("mobil_besked_zoom");
	$("#zoomframe").addClass("venner_vil_ha_zoom");

	$("#baggrund").addClass("skjul");
	$("#baggrund_side").removeClass("skjul");
	$("#baggrund_side").addClass("vis");
	$("#baggrund_side").addClass("baggrund_flip");

	$("#anders_container").removeClass("anders_sidder_possition");
	$("#anders_container").addClass("anders_konsekvens_possition");

	$("#anders_sprite").removeClass("anders_mobil_frame");
	$("#anders_sprite").addClass("anders_gem");

	$("#konsekvens_gem_wrapper").removeClass("skjul");
	$("#konsekvens_gem_wrapper").addClass("vis");
	$("#konsekvens_gem_wrapper").addClass("konsekvens_grow");

	setTimeout(privatSnakLink, 5000);
}

function delKonsekvens() {
	console.log("delKonsekvens!");

	$("#gemknap").removeClass("vis");
	$("#gemknap").addClass("skjul");
	$("#delknap").removeClass("vis");
	$("#delknap").addClass("skjul");

	$("#zoomframe").removeClass("mobil_besked_zoom");
	$("#zoomframe").addClass("venner_vil_ha_zoom");

	$("#baggrund").addClass("skjul");
	$("#baggrund_side").removeClass("skjul");
	$("#baggrund_side").addClass("vis");
	$("#baggrund_side").addClass("baggrund_flip");

	$("#anders_container").removeClass("anders_sidder_possition");
	$("#anders_container").addClass("anders_konsekvens_possition");

	$("#anders_sprite").removeClass("anders_mobil_frame");
	$("#anders_sprite").addClass("anders_del");

	$("#konsekvens_del_wrapper").removeClass("skjul");
	$("#konsekvens_del_wrapper").addClass("vis");
	$("#konsekvens_del_wrapper").addClass("konsekvens_grow");

	setTimeout(privatSnakLink, 5000);
}

function privatSnakLink() {
	console.log("privatSnakLink!");

	$("#privatsnak").removeClass("skjul");
	$("#privatsnak").addClass("vis");
	$("#privatsnak").addClass("privatsnak_slide");
}
