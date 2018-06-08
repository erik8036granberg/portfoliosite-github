/*
Kaninen og jægeren
Erik Granberg
*/

// - - - - - onLoad - - - - -

// variabler
var antalGuleroedder = 0;
var timer;
var gameInfoTimer;

// Skjul skilte og nedtoninger
$("#start_skilt").addClass("skjult");
$("#taktikvalg_skilt").addClass("skjult");
$("#game_info_skilt").addClass("skjult");
$("#game_over_skilt").addClass("skjult");
$("#vundet_let_skilt").addClass("skjult");
$("#game_win_skilt").addClass("skjult");
$("#nedtoning").addClass("skjult");
$("#blackout").addClass("skjult");

$("#timer_wrapper").hide();

// baggrundsmusik lydniveau
$("#musik_gunfight")[0].volume = 0.3;

// siden er loadet
$(window).on("load", startSkaerm);
console.log("Siden er loadet");

// - - - - - startSkaerm - - - - -

function startSkaerm() {
	console.log("startSkaerm");

	//	//	Startskærm vises
	$("#start_skilt").removeClass("skjult");
	$("#start_skilt").addClass("synlig");
	//
	//	//	Startnedtoning vises
	$("#nedtoning").removeClass("skjult");
	$("#nedtoning").addClass("synlig");

	// Start jaeger container
	$("#jaeger_container").addClass("jaeger_sidder");

	// Start Jaeger sprite frame
	$("#jaeger_sprite").addClass("jaeger_sidder_stille");

	// Der er klikket på startknap
	$("#start_knap").on("click", startKlikPaaKnap);
}

// - - - - - start_klik_paa_knap - - - - -

function startKlikPaaKnap() {
	console.log("startKlikPaaKnap");

	$("#start_knap").off("click", startKlikPaaKnap);

	// - - -

	// Start knaplyd effekt_bank
	$("#effekt_bank")[0].play();

	// - - - trigger

	//  Når lyden har spillet spillet
	$("#effekt_bank").on("ended", kaninHopInd);

}

// - - - - - kanin_hop_ind - - - - -

function kaninHopInd() {
	console.log("kaninHopInd");

	$("#effekt_bank").off("ended", kaninHopInd);

	// slut knaplyd effekt_bank
	$("#effekt_bank").off("ended");

	// - - -

	//	Startskærm skjules
	$("#start_skilt").removeClass("synlig");
	$("#start_skilt").addClass("skjult");

	//	Nedtoning skjules
	$("#nedtoning").removeClass("synlig");
	$("#nedtoning").addClass("skjult");

	// Start kanin move: kanin_ind-fra-siden
	$("#kanin_container").addClass("kanin_ind_fra_siden");

	// Start kanin-animation: kanin_hop_fremad
	$("#kanin_sprite").addClass("kanin_hop_fremad");

	// Start lyd: effekt_kaninhop
	$("#effekt_kaninhop_to_gange")[0].play();
	$("#effekt_kaninhop_to_gange")[0].volume = 0.1;

	// - - - trigger

	//  .kanin_ind-fra-siden er færdig
	$("#kanin_sprite").on("animationend", jaegerDrikker);
}



// - - - - - jaeger_drikker - - - - -

function jaegerDrikker() {
	console.log("jaegerDrikker");

	$("#kanin_sprite").off("animationend", jaegerDrikker);

	// slut lyd: effekt_kaninhop_to_gange
	$("#effekt_kaninhop_to_gange").off("ended");

	// - - -

	// Stop kanin move: kanin_ind-fra-siden
	$("#kanin_container").removeClass("kanin_ind_fra_siden");

	// Sæt kanin possition: kanin_bag_trae
	$("#kanin_container").addClass("kanin_bag_trae");

	// Stop sprite-animation: kanin_hop_fremad
	$("#kanin_sprite").removeClass("kanin_hop_fremad");

	// Sæt kanin sprite frame: kanin_staar
	$("#kanin_sprite").addClass("kanin_staar");

	// fjern jaeger sprite frame: jaeger_sidder_stille
	$("#jaeger_sprite").removeClass("jaeger_sidder_stille");

	// start jaeger sprite-ani: jaeger_drikker

	$("#jaeger_sprite").addClass("jaeger_drikker");

	// Start lyd: effekt_slurk_tre_gange
	$("#effekt_slurk_tre_gange")[0].play();
	$("#effekt_slurk_tre_gange")[0].volume = 0.2;

	// - - - trigger

	//  Jægeren har drukket 3 gange
	$("#jaeger_sprite").on("animationend", jaegerFalderISoevn);
}



// - - - - - jaeger_falder_i_soevn - - - - -

function jaegerFalderISoevn() {
	console.log("jaegerFalderISoevn");

	$("#jaeger_sprite").off("animationend", jaegerFalderISoevn);

	// Slut lyd: effekt_slurk_tre_gange
	$("#effekt_slurk_tre_gange").off("ended");

	// - - -

	// Stop sprite-animation: jaeger_drikker
	$("#jaeger_sprite").removeClass("jaeger_drikker");

	// Start sprite-animation: jaeger_falder_i_soevn
	$("#jaeger_sprite").addClass("jaeger_falder_i_soevn");

	// - - - trigger

	// .jaeger_falder_i_soevn er færdig + tid
	$("#jaeger_sprite").on("animationend", jaegerSover);
}



// - - - - -  jaegerSover - - - - -

function jaegerSover() {
	console.log("jaegerSover");

	$("#jaeger_sprite").off("animationend", jaegerSover);

	// - - -

	// Stop sprite-animation: jaeger_falder_i_soevn
	$("#jaeger_sprite").removeClass("jaeger_falder_i_soevn");

	// Start sprite-animation: jaeger_sover
	$("#jaeger_sprite").addClass("jaeger_sover");

	// Start lyd: effekt_snorken
	$("#effekt_snorken")[0].play();
	$("#effekt_snorken")[0].volume = 0.3;
	document.getElementById("effekt_snorken").loop = true;

	// stop sprite frame: kanin_staar
	$("#kanin_sprite").removeClass("kanin_staar");

	// Start sprite-animation: kanin_blinker
	$("#kanin_sprite").addClass("kanin_blinker");


	// - - - trigger

	//  Når .kanin_blinker er færdig + tid
	$("#kanin_sprite").on("animationend", taktikValg);
}



// - - - - -  taktikValg - - - - -

function taktikValg() {
	console.log("taktikValg");

	$("#kanin_sprite").off("animationend", taktikValg);

	// - - -

	// Taktik-skilt vises
	$("#taktikvalg_skilt").removeClass("skjult");
	$("#taktikvalg_skilt").addClass("synlig");

	// Taktik-nedtoning vises
	$("#nedtoning").removeClass("skjult");
	$("#nedtoning").addClass("synlig");

	// Baggrundsmusik skrues ned
	$("#musik_gunfight").animate({
		volume: 0
	}, 6000);

	// Snorken skrues ned
	$("#effekt_snorken").animate({
		volume: 0.05
	}, 2000);
	// - - - trigger

	// Der er klikket på knap a
	$("#taktikvalg_knap_a").on("click", taktikValgKlikPaaKnapA);

	$("#taktikvalg_tekst_a").on("click", taktikValgKlikPaaKnapA);

	// Der er klikket på knap a
	$("#taktikvalg_knap_b").on("click", taktikValgKlikPaaKnapB);

	$("#taktikvalg_tekst_b").on("click", taktikValgKlikPaaKnapB);

}

// - - - - -  taktikValgKlikPaaKnapA - - - - -

function taktikValgKlikPaaKnapA() {
	console.log("taktikValgKlikPaaKnapA");

	$("#taktikvalg_knap_a").off("click", taktikValgKlikPaaKnapA);
	$("#taktikvalg_tekst_a").off("click", taktikValgKlikPaaKnapA);

	// - - -

	// knaplyd effekt_bank spilles
	$("#effekt_bank")[0].play();


	// - - - trigger

	//  Når lyden har spillet spillet
	$("#effekt_bank").on("ended", kaninHopperFrem);

}


// - - - - -  kaninHopperFrem - - - - -

function kaninHopperFrem() {
	console.log("kaninHopperFrem");

	$("#effekt_bank").off("ended", kaninHopperFrem);

	// - - -

	// Taktikvalg-skilt skjules
	$("#taktikvalg_skilt").removeClass("synlig");
	$("#taktikvalg_skilt").addClass("skjult");
	$("#nedtoning").removeClass("synlig");
	$("#nedtoning").addClass("skjult");

	// Stop lyd effekt_bank
	$("#effekt_bank").off("ended");

	// Start lyd Actionmusik
	$("#musik_crust")[0].play();
	$("#musik_crust")[0].volume = 0.3;

	// Slut kanin-possition: kanin_bag_trae
	$("#kanin_container").removeClass("kanin_bag_trae");

	// Start kanin move: kanin_et_hop_til_hoejre
	$("#kanin_container").addClass("kanin_et_hop_til_hoejre");

	// Slut sprite-animation: kanin_blinker
	$("#kanin_sprite").removeClass("kanin_blinker");

	// Start sprite-animation: kanin_drej_i_luften
	$("#kanin_sprite").addClass("kanin_drej_i_luften");

	// Start lyd: effekt_kaninhop
	$("#effekt_kaninhop")[0].play();
	$("#effekt_kaninhop")[0].volume = 0.1;

	// - - - trigger

	// Når .kanin_et_hop_til_hoejre er færdig
	$("#kanin_container").on("animationend", kaninModMark);
}



// - - - - -   kaninModMark - - - - -

function kaninModMark() {
	console.log("kaninModMark");

	$("#kanin_container").off("animationend", kaninModMark);

	// - - -

	// Slut contaioner-ani: kanin_et_hop_til_hoejre
	$("#kanin_container").removeClass("kanin_et_hop_til_hoejre");

	// Begynd container possition: kanin_mod_mark
	$("#kanin_container").addClass("kanin_mark_possition");

	// Slut sprite-animation: kanin_drej_i_luften
	$("#kanin_sprite").removeClass("kanin_drej_i_luften");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_sprite").addClass("kanin_ryg_til");

	// Slut lyd: effekt_kaninhop
	$("#effekt_kaninhop").off("ended");

	// - - - trigger

	// Når kanin_ryg_til vises

	$("#kanin_sprite").on("animationend", kaninMarkHop1);
}

// - - - - -  kaninMarkHop1 - - - - -

function kaninMarkHop1() {
	console.log("kaninMarkHop1");

	$("#kanin_sprite").off("animationend", kaninMarkHop1);

	// - - -

	// Slut container possition: kanin_mod_mark
	$("#kanin_container").removeClass("kanin_mark_possition");

	// Begynd container animation: kanin_mark_move_1
	$("#kanin_container").addClass("kanin_mark_move_1");

	// Slut sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// Start sprite-animation: kanin_mark_hop
	$("#kanin_sprite").addClass("kanin_mark_hop");

	// Start lyd: effekt_kaninhop_1
	$("#effekt_kaninhop_1")[0].play();
	$("#effekt_kaninhop_1")[0].volume = 0.1;

	// - - - trigger

	// kanin_mark_hop er færdig
	$("#kanin_sprite").on("animationend", kaninMarkHop1Possition);

}

// - - - - -  kaninMarkHop1Possition - - - - -

function kaninMarkHop1Possition() {
	console.log("kaninMarkHop1Possition");

	$("#kanin_sprite").off("animationend", kaninMarkHop1Possition);

	// - - -

	// Slut contaioner-ani: kanin_mark_move_1
	$("#kanin_container").removeClass("kanin_mark_move_1");

	// Begynd kanin possition: kanin_mark_possition_1
	$("#kanin_container").addClass("kanin_mark_possition_1");

	// Slut sprite-animation: kanin_mark_hop
	$("#kanin_sprite").removeClass("kanin_mark_hop");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_sprite").addClass("kanin_ryg_til");

	// Slut lyd: effekt_kaninhop
	$("#effekt_kaninhop_1").off("ended");


	// - - - trigger

	// Når flytte-animation er færdig

	$("#kanin_container").on("animationend", kaninMarkHop2);
}

// - - - - -  kaninMarkHop2 - - - - -

function kaninMarkHop2() {
	console.log("kaninMarkHop2");

	$("#kanin_container").off("animationend", kaninMarkHop2);

	// Start lyd: effekt_kaninhop_2
	$("#effekt_kaninhop_2")[0].play();
	$("#effekt_kaninhop_2")[0].volume = 0.1;

	// - - -

	// Slut container kanin_mark_possition_1
	$("#kanin_container").removeClass("kanin_mark_possition_1");

	// Begynd container animation: kanin_mark_move_2
	$("#kanin_container").addClass("kanin_mark_move_2");

	// Slut sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// Start sprite-animation: kanin_mark_hop_2
	$("#kanin_sprite").addClass("kanin_mark_hop_2");

	// - - - trigger

	// kanin_mark_hop er færdig
	$("#kanin_sprite").on("animationend", kaninMarkHop2Possition);
}

// - - - - -  kaninMarkHop2Possition - - - - -

function kaninMarkHop2Possition() {
	console.log("kaninMarkHop2Possition");

	$("#kanin_sprite").off("animationend", kaninMarkHop2Possition);

	// Slut lyd: effekt_kaninhop
	$("#effekt_kaninhop_2").off("ended");

	// - - -

	// Slut contaioner-ani: kanin_mark_move_2
	$("#kanin_container").removeClass("kanin_mark_move_2");

	// Begynd container possition: kanin_mark_possition_2
	$("#kanin_container").addClass("kanin_mark_possition_2");

	// Slut sprite-animation: kanin_mark_hop_2
	$("#kanin_sprite").removeClass("kanin_mark_hop_2");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_sprite").addClass("kanin_ryg_til");

	// - - - trigger

	// Når flytte-animation er færdig

	$("#kanin_container").on("animationend", kaninMarkHop3);

}

// - - - - -  kaninMarkHop3 - - - - -

function kaninMarkHop3() {
	console.log("kaninMarkHop3");

	$("#kanin_container").off("animationend", kaninMarkHop3);

	// Start lyd: effekt_kaninhop_3
	$("#effekt_kaninhop_3")[0].play();
	$("#effekt_kaninhop_3")[0].volume = 0.1;


	// - - -

	// Slut container possition: kanin_mark_possition_2
	$("#kanin_container").removeClass("kanin_mark_possition_2");

	// Begynd container animation: kanin_mark_move_3
	$("#kanin_container").addClass("kanin_mark_move_3");

	// Slut sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// Start sprite-animation: kanin_mark_hop_3
	$("#kanin_sprite").addClass("kanin_mark_hop_3");

	// - - - trigger

	// kanin_mark_hop er færdig
	$("#kanin_sprite").on("animationend", kaninMarkHop3Possition);
}

// - - - - -  kaninMarkHop3Possition - - - - -

function kaninMarkHop3Possition() {
	console.log("kaninMarkHop3Possition");

	$("#kanin_sprite").off("animationend", kaninMarkHop3Possition);

	// Slut lyd: effekt_kaninhop
	$("#effekt_kaninhop_3").off("ended");


	// - - -

	// Slut contaioner-ani: kanin_mark_move_3
	$("#kanin_container").removeClass("kanin_mark_move_3");

	// Begynd container possition: kanin_mark_possition_3
	$("#kanin_container").addClass("kanin_mark_possition_3");

	// Slut sprite-animation: kanin_mark_hop_3
	$("#kanin_sprite").removeClass("kanin_mark_hop_3");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_container").addClass("kanin_ryg_til");

	// - - - trigger

	// Når flytte-animation er færdig

	$("#kanin_container").on("animationend", kaninMarkHop4);
}

// - - - - -  kaninMarkHop4 - - - - -

function kaninMarkHop4() {
	console.log("kaninMarkHop4");

	$("#kanin_container").off("animationend", kaninMarkHop4);

	// Start lyd: effekt_kaninhop_4
	$("#effekt_kaninhop_4")[0].play();
	$("#effekt_kaninhop_4")[0].volume = 0.1;

	// - - -

	// Slut container possition: kanin_mark_possition_3
	$("#kanin_container").removeClass("kanin_mark_possition_3");

	// Begynd container animation: kanin_mark_move_4
	$("#kanin_container").addClass("kanin_mark_move_4");

	// Slut sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// Start sprite-animation: kanin_mark_hop_4
	$("#kanin_sprite").addClass("kanin_mark_hop_4");

	// - - - trigger

	// kanin_mark_hop er færdig
	$("#kanin_sprite").on("animationend", kaninMarkHop4Possition);
}

// - - - - -  kaninMarkHop4Possition - - - - -

function kaninMarkHop4Possition() {
	console.log("kaninMarkHop4Possition");

	$("#kanin_sprite").off("animationend", kaninMarkHop4Possition);

	// Slut lyd: effekt_kaninhop_4
	$("#effekt_kaninhop_4").off("ended");

	// - - -

	// Slut contaioner-ani: kanin_mark_move_4
	$("#kanin_container").removeClass("kanin_mark_move_4");

	// Begynd container possition: kanin_mark_possition_4
	$("#kanin_container").addClass("kanin_mark_possition_4");

	// Slut sprite-animation: kanin_mark_hop_4
	$("#kanin_sprite").removeClass("kanin_mark_hop_4");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_sprite").addClass("kanin_ryg_til");

	// - - - trigger

	// Når flytte-animation er færdig

	$("#kanin_container").on("animationend", kaninMarkHop5);
}

// - - - - -  kaninMarkHop5 - - - -

function kaninMarkHop5() {
	console.log("kaninMarkHop5");

	$("#kanin_container").off("animationend", kaninMarkHop5);

	// Start lyd: effekt_kaninhop_5
	$("#effekt_kaninhop_5")[0].play();
	$("#effekt_kaninhop_5")[0].volume = 0.1;

	// - - -

	// Slut container possition: kanin_mark_possition_4
	$("#kanin_container").removeClass("kanin_mark_possition_4");

	// Begynd container animation: kanin_mark_move_5
	$("#kanin_container").addClass("kanin_mark_move_5");

	// Slut sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// Start sprite-animation: kanin_mark_hop
	$("#kanin_sprite").addClass("kanin_mark_hop_5");

	// - - - trigger

	// kanin_mark_hop er færdig
	$("#kanin_sprite").on("animationend", kaninMarkHop5Possition);
}

// - - - - -  kaninMarkHop5Possition - - - -

function kaninMarkHop5Possition() {
	console.log("kaninMarkHop5Possition");

	$("#kanin_sprite").off("animationend", kaninMarkHop5Possition);

	// Slut lyd: effekt_kaninhop
	$("#effekt_kaninhop_5").off("ended");

	// - - -

	// Slut contaioner-ani: kanin_mark_move_5
	$("#kanin_container").removeClass("kanin_mark_move_5");

	// Begynd container possition: kanin_mark_possition_5
	$("#kanin_container").addClass("kanin_mark_possition_5");

	// Slut sprite-animation: kanin_mark_hop_5
	$("#kanin_sprite").removeClass("kanin_mark_hop_5");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_sprite").addClass("kanin_ryg_til");

	// - - - trigger

	// Når flytte-animation er færdig

	$("#kanin_container").on("animationend", kaninMarkHop6);
}

// - - - - -  kaninMarkHop6 - - - -

function kaninMarkHop6() {
	console.log("kaninMarkHop6");

	// Start lyd: effekt_kaninhop_6
	$("#effekt_kaninhop_6")[0].play();
	$("#effekt_kaninhop_6")[0].volume = 0.1;


	$("#kanin_container").off("animationend", kaninMarkHop6);

	// - - -

	// Slut container possition: kanin_mark_possition_5
	$("#kanin_container").removeClass("kanin_mark_possition_5");

	// Begynd container animation: kanin_mark_move_6
	$("#kanin_container").addClass("kanin_mark_move_6");

	// Slut sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// Start sprite-animation: kanin_mark_hop_6
	$("#kanin_sprite").addClass("kanin_mark_hop_6");

	// - - - trigger

	// kanin_mark_hop er færdig
	$("#kanin_sprite").on("animationend", kaninMarkHop6Possition);
}

// - - - - -  kaninMarkHop6Possition - - - -

function kaninMarkHop6Possition() {
	console.log("kaninMarkHop6Possition");

	// Slut lyd: effekt_kaninhop
	$("#effekt_kaninhop_6").off("ended");

	$("#kanin_sprite").off("animationend", kaninMarkHop6Possition);

	// - - -

	// Slut contaioner-ani: kanin_mark_move_6
	$("#kanin_container").removeClass("kanin_mark_move_6");

	// Begynd container possition: kanin_mark_possition_6
	$("#kanin_container").addClass("kanin_mark_possition_6");

	// Slut sprite-animation: kanin_mark_hop_6
	$("#kanin_sprite").removeClass("kanin_mark_hop_6");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_sprite").addClass("kanin_ryg_til");


	// - - -

	// Når flytte-animation er færdig

	$("#kanin_container").on("animationend", randomValg);
}

// - - - - -  randomValg - - - -

function randomValg() {
	console.log("Random valg");

	$("#kanin_container").off("animationend", randomValg);

	if (Math.random() >= 0.20) {
		kaninMobilRinger();
		console.log("random = mobil ringer!");
	} else {
		friBane();
		console.log("random = der er fri bane");
	}
}

// - - - - -  kaninMobilRinger - - - -

function kaninMobilRinger() {
	console.log("kaninMobilRinger");

	// Slut lyd: effekt_snorken
	$("#effekt_snorken").off("ended");
	document.getElementById("effekt_snorken").loop = false;

	// - - -

	// begynd: kanin mobil_size
	$("#kanin_sprite").addClass("kanin_mobil_size");

	// Slut kanin possition: kanin_mark_possition_6
	$("#kanin_container").removeClass("kanin_mark_possition_6");

	// begynd kanin-animation: kanin_mobil_ryster
	$("#kanin_container").addClass("kanin_mobil_ryster");

	// start lyd effekt_mobilringer
	$("#effekt_mobilringer")[0].play();
	$("#effekt_mobilringer")[0].volume = 1;

	// start lyd effekt_mobilbrummen_1
	$("#effekt_mobilbrummen_1")[0].play();
	$("#effekt_mobilbrummen_1")[0].volume = 0.5;


	// - - -

	// Når kanin_mobil_ryster er færdig

	$("#kanin_container").on("animationend", kaninChok);
}

// - - - - -  kaninChok - - - -

function kaninChok() {
	console.log("kaninBange");
	$("#kanin_container").off("animationend", kaninChok);

	// - - -

	// stop kanin-move: kanin_mobil_ryster
	$("#kanin_container").removeClass("kanin_mobil_ryster");

	// Slut lyd: effekt_mobilbrummen_1
	$("effekt_mobilbrummen_1").off("ended");


	// begynd kanin-animation: kanin_mobil_possition
	$("#kanin_container").addClass("kanin_mobil_possition");

	// fjern sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// start sprite-still: kanin_bange
	$("#kanin_sprite").addClass("kanin_bange");

	// - - -

	kaninMobil2Ringer();
}

// - - - - -  kaninMobil2Ringer - - - -

function kaninMobil2Ringer() {
	console.log("kaninMobil2Ringer");

	// - - -

	// begynd kanin-move: kanin_mobil_ryster_2
	$("#kanin_container").addClass("kanin_mobil_ryster_2");

	// start lyd effekt_mobilbrummen_2
	$("#effekt_mobilbrummen_2")[0].play();
	$("#effekt_mobilbrummen_2")[0].volume = 0.5;

	// - - -

	// Når sprite-animation er færdig

	$("#kanin_container").on("animationend", MobilRygerFrem);

}

// - - - - -  MobilRygerFrem - - - -

function MobilRygerFrem() {
	console.log("MobilRygerFrem");

	$("#kanin_container").off("animationend", MobilRygerFrem);

	// - - -

	// slut kanin-animation: kanin_mobil_ryster_2
	$("#kanin_container").removeClass("kanin_mobil_ryster_2");

	// Slut lyd: effekt_mobilbrummen_2
	$("effekt_mobilbrummen_2").off("ended");

	// begynd contaioner-animation: mobil ryger frem
	$("#mobil_container").addClass("mobil_ryger_frem");

	// - - -

	// Når mobil ryger frem er færdig
	$("#mobil_container").on("animationend", mobilRyster);
}

// - - - - -  mobilRyster - - - -

function mobilRyster() {
	console.log("mobilRyster");

	$("#mobil_container").off("animationend", mobilRyster);

	// - - -

	// slut jaeger sprite-animation: jaeger_sover
	$("#jaeger_sprite").removeClass("jaeger_sover");


	// slut mobil-move: mobil ryger frem
	$("#mobil_container").removeClass("mobil_ryger_frem");

	// begynd mobil possition: mobil_ryster_possition
	$("#mobil_container").addClass("mobil_ryster_possition");

	// begynd mobil-move: mobil_ryster
	$("#mobil_container").addClass("mobil_ryster");

	// Start lyd: mobilbrummen_3
	$("#effekt_mobilbrummen_3")[0].play();
	$("#effekt_mobilbrummen_3")[0].volume = 0.5;

	// start jaeger sprite-animation: jaeger_vaagner
	$("#jaeger_sprite").addClass("jaeger_vaagner");

	$("#mobil_container").on("animationend", jaegerVaagen);
}

// - - - - -  jaegerVaagen - - - -

function jaegerVaagen() {
	console.log("jaegerVaagen");

	$("#mobil_container").off("animationend", jaegerVaagen);

	// - - -

	// fjern jaeger sprite-animation: jaeger_vaagner
	$("#jaeger_sprite").removeClass("jaeger_vaagner");

	// start jaeger sprite-animation: jaeger_vaagen_gal
	$("#jaeger_sprite").addClass("jaeger_vaagen_gal");

	// - - -

	//	$("#jaeger_sprite").on("animationend", jaegerVaagen2);

	jaegerVaagen2();
}

// - - - - -  jaegerVaagen - - - -

function jaegerVaagen2() {
	console.log("jaegerVaagen2");

	//	$("#jaeger_sprite").off("animationend", jaegerVaagen2);

	// - - -

	// fjern jaeger sprite-animation: jaeger_vaagen_gal
	$("#jaeger_sprite").removeClass("jaeger_vaagen_gal");

	// start jaeger sprite-animation: jaeger_vaagen
	$("#jaeger_sprite").addClass("jaeger_vaagen");

	// - - -

	$("#jaeger_sprite").on("animationend", jaegerGevaerTabt);
}

// - - - - -  jaegerGevaerTabt - - - -

function jaegerGevaerTabt() {
	console.log("jaegerGevaerTabt");

	$("#jaeger_sprite").off("animationend", jaegerGevaerTabt);

	// - - -

	// Slut lyd effekt_mobilbrummen_3
	$("effekt_mobilbrummen_3").off("ended");

	// slut mobil-animation: mobil_ryster
	$("#mobil_container").removeClass("mobil_ryster");

	// start contaioner-animation: mobil_ryster
	$("#mobil_container").addClass("mobil_ryster_2");

	// effekt_mobilbrummen_4
	$("#effekt_mobilbrummen_4")[0].play();
	$("#effekt_mobilbrummen_4")[0].volume = 0.5;

	// - - -

	// mobil_ryster_2 er færdig
	$("#mobil_container").on("animationend", gameInfo);
}

// - - - - -  gameInfo - - - -

function gameInfo() {
	console.log("gameInfo");

	$("#mobil_container").off("animationend", gameInfo);

	// Slut jaeger sprite-animation: jaeger_vaagen
	$("#jaeger_sprite").removeClass("jaeger_vaagen");

	// sæt jaeger sprite-frame: jaeger_vaagen
	$("#jaeger_sprite").addClass("jaeger_vaagen_gal_2");

	// - - -

	// Slut mobil-animation: .mobil_ryster_2
	$("#mobil_container").removeClass("mobil_ryster_2");

	// Slut #effekt_mobilbrummen_4
	$("effekt_mobilbrummen_4").off("ended");

	// vis gameInfo-skilt
	$("#game_info_skilt").removeClass("skjult");
	$("#game_info_skilt").addClass("synlig");

	// vis nedtoning
	$("#nedtoning").removeClass("skjult");
	$("#nedtoning").addClass("synlig");

	// Start tæller
	$("#info_countdown_sprite").addClass("info_countdown_do");

	// Slut kanin possition: kanin_mark_possition_6
	$("#kanin_container").removeClass("kanin_mark_possition_6");

	// Start kanin possition: .kanin_game_possition
	$("#kanin_container").addClass("kanin_game_possition");

	// Start mobil_game_possition
	$("#mobil_container").addClass("mobil_game_possition");

	// - - -

	// Når tæller er færdig
	$("#info_countdown_sprite").on("animationend", GameSetup);
}

// - - - - -  GameSetup - - - -

function GameSetup() {
	console.log("GameSetup");

	$("#info_countdown_sprite").off("animationend", GameSetup);

	// - - -

	// skjul gameInfo-skilt
	$("#game_info_skilt").removeClass("synlig");
	$("#game_info_skilt").addClass("skjult");

	// vis nedtoning
	$("#nedtoning").removeClass("synlig");
	$("#nedtoning").addClass("skjult");

	// begynd: kanin mobil_size
	$("#kanin_sprite").addClass("kanin_mobil_size");

	// Gå til gameBegyndTimer
	gameBegyndTimer();
}

//- - - - - - gameBegyndTimer - - - - - -

function gameBegyndTimer() {
	console.log("gameBegyndTimer");

	//Sæt en timer: gameTimer
	timer = setTimeout(gameTabt, 10000);

	// Begynd gulerod_puls
	$(".gulerod").addClass("gulerod_puls");

	// gå til timerBar
	timerBar();
}

//- - - - - - timerBar - - - - - -

function timerBar() {
	console.log("timerBar");

	// Vis Timer #timer_wrapper + #timer_bar
	$("#timer_wrapper").show();

	//start #timer_bar animation: .timer_gaa_ned
	$("#timer_bar").addClass("timer_gaa_ned");
}

//- - - - - - allowDrop - - - - - -

function allowDrop(ev) {
	console.log("allowDrop");
	ev.preventDefault();
}

//- - - - - - drag - - - - - -

function drag(ev) {
	console.log("drag");
	ev.dataTransfer.setData('text', ev.target.id);

	// Start knaplyd effekt_swup
	$("#effekt_swup")[0].play();
}

//- - - - - - drop - - - - - -

function drop(ev, target) {
	console.log("function drop");
	ev.preventDefault();
	//	console.log(target.id + " : " + ev.target.id)
	//	console.log(ev.dataTransfer.getData("text/html"));
	//	console.log(ev.dataTransfer.getData("text"));
	var data = ev.dataTransfer.getData("text");
	$("#" + ev.dataTransfer.getData("text")).hide();

	//Læg til antalGuleroedder++
	antalGuleroedder++;
	console.log("antal gulerødder: " + antalGuleroedder);

	//If gulerødder antalGuleroedder >= 7
	if (antalGuleroedder >= 7) {
		clearTimeout(timer);
		gameVundet();
	}
}

//- - - - - - gameTabt - - - - - -

function gameTabt() {
	console.log("gameTabt");

	// Slut drop-zone: .kanin_drop
	$("#kanin_drop").hide();

	// Stop timer-bar:
	$("#timer_bar").hide();

	// Stop gulerod_puls
	$(".gulerod").removeClass("gulerod_puls");

	// Sæt alle gulerødder “#drag” til draggable = false
	document.getElementById("drag1").draggable = false;
	document.getElementById("drag2").draggable = false;
	document.getElementById("drag3").draggable = false;
	document.getElementById("drag4").draggable = false;
	document.getElementById("drag5").draggable = false;
	document.getElementById("drag6").draggable = false;
	document.getElementById("drag7").draggable = false;

	// - - -

	jaegerSkyder();
}

// - - - - -  jaegerSkyder - - - -

function jaegerSkyder() {
	console.log("jaegerSkyder");

	$("#mobil_container").off("animationend", jaegerSkyder);

	// - - -

	// start cenasurskilt-move: censur_cover
	$("#censur_container").addClass("censur_cover");

	// slut jaeger sprite-frame: jaeger_vaagen_gal_2
	$("#jaeger_sprite").removeClass("jaeger_vaagen_gal_2");

	// start sprite-animation: jaeger_skyder
	$("#jaeger_sprite").addClass("jaeger_skyder");

	// Start lyd effekt_skud
	$("#effekt_skud")[0].play();
	$("#effekt_skud")[0].volume = 0.5;

	// jaeger har skudt
	$("#jaeger_sprite").on("animationend", efterSkud);

}

// - - - - -  efterSkud - - - -

function efterSkud() {
	console.log("efterSkud");

	$("#jaeger_sprite").off("animationend", efterSkud);

	// skjul Timer #timer_wrapper + #timer_bar
	$("#timer_wrapper").hide();

	//start #timer_bar animation: .timer_gaa_ned
	$("#timer_bar").removeClass("timer_gaa_ned");

	// Slut sprite-animation: jaeger_skyder
	$("#jaeger_sprite").removeClass("jaeger_skyder");

	// Start Jaeger sprite frame: jaeger_sidder_stille
	$("#jaeger_sprite").addClass("jaeger_sidder_stille");

	// Slut lyd effekt_skud
	$("effekt_skud").off("ended");

	//efter 4 sec gå til gameOver
	setTimeout(gameOver, 4000);
}



//- - - - - - gameVundet - - - - - -

function gameVundet() {
	console.log("gameVundet");

	// Stop gulerod_puls
	$(".gulerod").removeClass("gulerod_puls");

	// Sæt timer på pause
	$("#timer_bar").addClass("timer_gaa_ned_paused");

	gameVundetHop();
}

// - - - - -  gameVundetHop - - - -

function gameVundetHop() {
	console.log("gameVundetHop");

	// slut sprite-still: kanin_bange
	$("#kanin_sprite").removeClass("kanin_bange");

	// start sprite-aniamtion: kanin_hop_glad
	$("#kanin_sprite").addClass("kanin_hop_glad");

	$("#kanin_sprite").on("animationend", gameVundetHop2);
}

// - - - - -  gameVundetHop2 - - - -

function gameVundetHop2() {
	console.log("gameVundetHop2");

	$("#kanin_sprite").off("animationend", gameVundetHop2);

	// fjern jaeger sprite-frame: jaeger_vaagen_gal
	$("#jaeger_sprite").removeClass("jaeger_vaagen_gal_2");

	// start Jaeger sprite-animation: jaeger_taber
	$("#jaeger_sprite").addClass("jaeger_taber");

	// skjul Timer #timer_wrapper + #timer_bar
	$("#timer_wrapper").hide();

	// Når Jaeger sprite-animation: jaeger_taber er færdig
	$("#jaeger_sprite").on("animationend", gameVundetHop3);
}

// - - - - -  gameJaegerTaber - - - -

function gameVundetHop3() {
	console.log("gameVundetHop3");

	$("#jaeger_sprite").off("animationend", gameVundetHop3);

	// fjern Jaeger sprite-animation: jaeger_taber
	$("#jaeger_sprite").removeClass("jaeger_taber");

	// start Jaeger sprite-frame: jaeger_tabt
	$("#jaeger_sprite").addClass("jaeger_tabt");

	gameWin();
}

// - - - - -  friBane - - - -

function friBane() {
	console.log("friBane");

	// slut sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// slut sprite-aniamtion: kanin_drej_i_luften
	$("#kanin_sprite").addClass("kanin_drej_i_luften_win");

	// kaninen har vendt sig
	$("#kanin_sprite").on("animationend", friBane2);
}

// - - - - -  friBane2 - - - -

function friBane2() {
	console.log("friBane2");

	$("#kanin_sprite").off("animationend", friBane2);

	// slut sprite-aniamtion: kanin_drej_i_luften
	$("#kanin_sprite").removeClass("kanin_drej_i_luften_win");

	// start sprite-aniamtion: kanin_hop_glad
	$("#kanin_sprite").addClass("kanin_hop_glad");

	// kaninen har hoppet glad
	$("#kanin_sprite").on("animationend", vundetLet);
}

// - - - - -  VundetLet - - - -

function vundetLet() {
	console.log("vundetLet");

	$("#kanin_sprite").off("animationend", vundetLet);

	// vis vundet let-skilt
	$("#vundet_let_skilt").removeClass("skjult");
	$("#vundet_let_skilt").addClass("synlig");

	// vis nedtoning
	$("#nedtoning").removeClass("skjult");
	$("#nedtoning").addClass("synlig");

	// Der er klikket på knap
	$("#vundet_let_knap").on("click", vundetLetKlikPaaKnap);

	// Der er klikket på tekst
	$("#vundet_let_tekst").on("click", vundetLetKlikPaaKnap);
}

// - - - - -  GameOverKlikPaaKnap - - - -

function vundetLetKlikPaaKnap() {
	console.log("vundetLetKlikPaaKnap");

	$("#vundet_let_knap").off("click", vundetLetKlikPaaKnap);
	$("#vundet_let_tekst").off("click", vundetLetKlikPaaKnap);

	// knaplyd effekt_bank spilles
	$("#effekt_bank")[0].play();

	//  Når lyden har spillet spillet
	$("#effekt_bank").on("ended", reloadPage);
}


// - - - - -  taktikValgKlikPaaKnapB - - - - -

function taktikValgKlikPaaKnapB() {
	console.log("taktikValgKlikPaaKnapB");

	$("#taktikvalg_knap_a").off("click", taktikValgKlikPaaKnapB);
	$("#taktikvalg_tekst_a").off("click", taktikValgKlikPaaKnapB);

	// - - -

	// knaplyd effekt_bank spilles
	$("#effekt_bank")[0].play();


	// - - - trigger

	//  Når lyden har spillet spillet
	$("#effekt_bank").on("ended", kungFuPlan);

}

function kungFuPlan() {
	console.log("kungFuPlan");

	$("#effekt_bank").off("ended", kungFuPlan);

	// - - -

	// Taktikvalg-skilt skjules
	$("#taktikvalg_skilt").removeClass("synlig");
	$("#taktikvalg_skilt").addClass("skjult");
	$("#nedtoning").removeClass("synlig");
	$("#nedtoning").addClass("skjult");

	// Stop lyd effekt_bank
	$("#effekt_bank").off("ended");

	$("#musik_gunfight").animate({
		volume: 0
	}, 9000);

	// Start lyd Actionmusik
	$("#musik_crust")[0].play();
	$("#musik_crust")[0].volume = 0.2;

	// Slut kanin-possition: kanin_bag_trae
	$("#kanin_container").removeClass("kanin_bag_trae");

	// Start kanin move: kanin_et_hop_til_hoejre
	$("#kanin_container").addClass("kanin_et_hop_til_hoejre");

	// Slut sprite-animation: kanin_blinker
	$("#kanin_sprite").removeClass("kanin_blinker");

	// Start sprite-animation: kanin_drej_i_luften
	$("#kanin_sprite").addClass("kanin_drej_i_luften");

	// Start lyd: effekt_kaninhop
	$("#effekt_kaninhop")[0].play();
	$("#effekt_kaninhop")[0].volume = 0.1;

	// Start blackout
	$("#blackout").removeClass("skjult");
	$("#blackout").addClass("synlig");
	$("#blackout").addClass("fade_to_black");

	// Start blackout-tekst
	$("#blackout_tekst").removeClass("skjult");
	$("#blackout_tekst").addClass("synlig");

	// - - - trigger

	// Når .kanin_et_hop_til_hoejre er færdig
	$("#kanin_container").on("animationend", kungFukaninModMark);
}



// - - - - -   kungFukaninModMark - - - - -

function kungFukaninModMark() {
	console.log("kungFukaninModMark");

	$("#kanin_container").off("animationend", kungFukaninModMark);

	// - - -

	// Slut contaioner-ani: kanin_et_hop_til_hoejre
	$("#kanin_container").removeClass("kanin_et_hop_til_hoejre");

	// Begynd container possition: kanin_mod_mark
	$("#kanin_container").addClass("kanin_mark_possition");

	// Slut sprite-animation: kanin_drej_i_luften
	$("#kanin_sprite").removeClass("kanin_drej_i_luften");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_sprite").addClass("kanin_ryg_til");

	// Slut lyd: effekt_kaninhop
	$("#effekt_kaninhop").off("ended");



	// - - - trigger

	// Når kanin_ryg_til vises

	$("#kanin_sprite").on("animationend", kungFukaninMarkHop1);
}

// - - - - -  kungFukaninMarkHop1 - - - - -

function kungFukaninMarkHop1() {
	console.log("kaninMarkHop1");

	$("#kanin_sprite").off("animationend", kungFukaninMarkHop1);

	// - - -

	// Slut container possition: kanin_mod_mark
	$("#kanin_container").removeClass("kanin_mark_possition");

	// Begynd container animation: kanin_mark_move_1
	$("#kanin_container").addClass("kanin_mark_move_1");

	// Slut sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// Start sprite-animation: kanin_mark_hop
	$("#kanin_sprite").addClass("kanin_mark_hop");

	// Start lyd: effekt_kaninhop_1
	$("#effekt_kaninhop_1")[0].play();
	$("#effekt_kaninhop_1")[0].volume = 0.1;

	// - - - trigger

	// kanin_mark_hop er færdig
	$("#kanin_sprite").on("animationend", kungFukaninMarkHop1Possition);

}

// - - - - -  kungFukaninMarkHop1Possition - - - - -

function kungFukaninMarkHop1Possition() {
	console.log("kungFukaninMarkHop1Possition");

	$("#kanin_sprite").off("animationend", kungFukaninMarkHop1Possition);

	// - - -

	// Slut contaioner-ani: kanin_mark_move_1
	$("#kanin_container").removeClass("kanin_mark_move_1");

	// Begynd kanin possition: kanin_mark_possition_1
	$("#kanin_container").addClass("kanin_mark_possition_1");

	// Slut sprite-animation: kanin_mark_hop
	$("#kanin_sprite").removeClass("kanin_mark_hop");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_sprite").addClass("kanin_ryg_til");

	// Slut lyd: effekt_kaninhop
	$("#effekt_kaninhop_1").off("ended");


	// - - - trigger

	// Når flytte-animation er færdig

	$("#kanin_container").on("animationend", kungFukaninMarkHop2);
}

// - - - - -  kungFukaninMarkHop2 - - - - -

function kungFukaninMarkHop2() {
	console.log("kungFukaninMarkHop2");

	// Start lyd: effekt_kaninhop_2
	$("#effekt_kaninhop_2")[0].play();
	$("#effekt_kaninhop_2")[0].volume = 0.1;


	$("#kanin_container").off("animationend", kungFukaninMarkHop2);

	// - - -

	// Slut container kanin_mark_possition_1
	$("#kanin_container").removeClass("kanin_mark_possition_1");

	// Begynd container animation: kanin_mark_move_2
	$("#kanin_container").addClass("kanin_mark_move_2");

	// Slut sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// Start sprite-animation: kanin_mark_hop_2
	$("#kanin_sprite").addClass("kanin_mark_hop_2");

	// - - - trigger

	// kanin_mark_hop er færdig
	$("#kanin_sprite").on("animationend", kungFukaninMarkHop2Possition);
}

// - - - - -  kungFukaninMarkHop2Possition - - - - -

function kungFukaninMarkHop2Possition() {
	console.log("kungFukaninMarkHop2Possition");

	// Slut lyd: effekt_kaninhop
	$("#effekt_kaninhop_2").off("ended");

	$("#kanin_sprite").off("animationend", kungFukaninMarkHop2Possition);

	// - - -

	// Slut contaioner-ani: kanin_mark_move_2
	$("#kanin_container").removeClass("kanin_mark_move_2");

	// Begynd container possition: kanin_mark_possition_2
	$("#kanin_container").addClass("kanin_mark_possition_2");

	// Slut sprite-animation: kanin_mark_hop_2
	$("#kanin_sprite").removeClass("kanin_mark_hop_2");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_sprite").addClass("kanin_ryg_til");

	// - - - trigger

	// Når flytte-animation er færdig

	$("#kanin_container").on("animationend", kungFukaninMarkHop3);

}

// - - - - -  kaninMarkHop3 - - - - -

function kungFukaninMarkHop3() {
	console.log("kungFukaninMarkHop3");

	// Start lyd: effekt_kaninhop_3
	$("#effekt_kaninhop_3")[0].play();
	$("#effekt_kaninhop_3")[0].volume = 0.1;

	$("#kanin_container").off("animationend", kungFukaninMarkHop3);

	// - - -

	// Slut container possition: kanin_mark_possition_2
	$("#kanin_container").removeClass("kanin_mark_possition_2");

	// Begynd container animation: kanin_mark_move_3
	$("#kanin_container").addClass("kanin_mark_move_3");

	// Slut sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// Start sprite-animation: kanin_mark_hop_3
	$("#kanin_sprite").addClass("kanin_mark_hop_3");

	// - - - trigger

	// kanin_mark_hop er færdig
	$("#kanin_sprite").on("animationend", kungFukaninMarkHop3Possition);
}

// - - - - -  kaninMarkHop3Possition - - - - -

function kungFukaninMarkHop3Possition() {
	console.log("kungFukaninMarkHop3Possition");

	// Slut lyd: effekt_kaninhop
	$("#effekt_kaninhop_3").off("ended");

	$("#kanin_sprite").off("animationend", kungFukaninMarkHop3Possition);

	// - - -

	// Slut contaioner-ani: kanin_mark_move_3
	$("#kanin_container").removeClass("kanin_mark_move_3");

	// Begynd container possition: kanin_mark_possition_3
	$("#kanin_container").addClass("kanin_mark_possition_3");

	// Slut sprite-animation: kanin_mark_hop_3
	$("#kanin_sprite").removeClass("kanin_mark_hop_3");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_container").addClass("kanin_ryg_til");

	// - - - trigger

	// Når flytte-animation er færdig

	$("#kanin_container").on("animationend", kungFukaninMarkHop4);
}

// - - - - -  kaninMarkHop4 - - - - -

function kungFukaninMarkHop4() {
	console.log("kungFukaninMarkHop4");

	// Start lyd: effekt_kaninhop_4
	$("#effekt_kaninhop_4")[0].play();
	$("#effekt_kaninhop_4")[0].volume = 0.1;

	$("#kanin_container").off("animationend", kungFukaninMarkHop4);

	// - - -

	// Slut container possition: kanin_mark_possition_3
	$("#kanin_container").removeClass("kanin_mark_possition_3");

	// Begynd container animation: kanin_mark_move_4
	$("#kanin_container").addClass("kanin_mark_move_4");

	// Slut sprite-still: kanin_ryg_til
	$("#kanin_sprite").removeClass("kanin_ryg_til");

	// Start sprite-animation: kanin_mark_hop_4
	$("#kanin_sprite").addClass("kanin_mark_hop_4");

	// - - - trigger

	// kanin_mark_hop er færdig
	$("#kanin_sprite").on("animationend", kungFukaninMarkHop4Possition);
}

// - - - - -  kaninMarkHop4Possition - - - - -

function kungFukaninMarkHop4Possition() {
	console.log("kungFukaninMarkHop4Possition");

	// Slut lyd: effekt_kaninhop_4
	$("#effekt_kaninhop_4").off("ended");

	$("#kanin_sprite").off("animationend", kungFukaninMarkHop4Possition);

	// - - -

	// Slut contaioner-ani: kanin_mark_move_4
	$("#kanin_container").removeClass("kanin_mark_move_4");

	// Begynd container possition: kanin_mark_possition_4
	$("#kanin_container").addClass("kanin_mark_possition_4");

	// Slut sprite-animation: kanin_mark_hop_4
	$("#kanin_sprite").removeClass("kanin_mark_hop_4");

	// begynd sprite-still: kanin_ryg_til
	$("#kanin_sprite").addClass("kanin_ryg_til");

	// slut blackout
	$("#blackout").removeClass("synlig");
	$("#blackout").addClass("skjult");
	$("#blackout").removeClass("fade_to_black");

	// fjern jaeger sprite-frame: jaeger_sover
	$("#jaeger_sprite").removeClass("jaeger_sover");

	// sæt Jaeger sprite-animation: jaeger_vaagen_gal_2
	$("#jaeger_sprite").addClass("jaeger_sidder");

	// fjern blackout-tekst
	$("#blackout_tekst").removeClass("synlig");
	$("#blackout_tekst").addClass("skjult");

	gameOver();
}


// - - - - -  GameOver - - - -

function gameOver() {
	console.log("gameOver");

	// vis game over-skilt
	$("#game_over_skilt").removeClass("skjult");
	$("#game_over_skilt").addClass("synlig");

	// vis nedtoning
	$("#nedtoning").removeClass("skjult");
	$("#nedtoning").addClass("synlig");

	// Der er klikket på knap
	$("#game_over_knap").on("click", gameOverKlikPaaKnap);

	// Der er klikket på tekst
	$("#game_over_tekst").on("click", gameOverKlikPaaKnap);
}

// - - - - -  GameOverKlikPaaKnap - - - -

function gameOverKlikPaaKnap() {
	console.log("GameOverKlikPaaKnap");

	$("#game_over_knap").off("click", gameOverKlikPaaKnap);
	$("#game_over_tekst").off("click", gameOverKlikPaaKnap);

	// knaplyd effekt_bank spilles
	$("#effekt_bank")[0].play();

	//  Når lyden har spillet spillet
	$("#effekt_bank").on("ended", reloadPage);
}

// - - - - -  GameWin - - - -

function gameWin() {
	console.log("gameWin");

	// Når Jaeger sprite-animation: jaeger_taber er færdig
	$("#jaeger_sprite").on("animationend", gameWin);

	// vis game over-skilt
	$("#game_win_skilt").removeClass("skjult");
	$("#game_win_skilt").addClass("synlig");

	// vis nedtoning
	$("#nedtoning").removeClass("skjult");
	$("#nedtoning").addClass("synlig");

	// Der er klikket på knap
	$("#game_win_knap").on("click", gameWinKlikPaaKnap);

	// Der er klikket på tekst
	$("#game_win_tekst").on("click", gameWinKlikPaaKnap);
}

// - - - - -  gameWinKlikPaaKnap - - - -

function gameWinKlikPaaKnap() {
	console.log("gameWinKlikPaaKnap");

	$("#game_win_knap").off("click", gameWinKlikPaaKnap);
	$("#game_win_tekst").off("click", gameWinKlikPaaKnap);

	// knaplyd effekt_bank spilles
	$("#effekt_bank")[0].play();

	//  Når lyden har spillet spillet
	$("#effekt_bank").on("ended", reloadPage);
}

// - - - - -  reloadPage - - - -

function reloadPage() {
	console.log("reloadPage");

	//  Når lyden har spillet spillet
	$("#effekt_bank").off("ended", reloadPage);

	// Reload page uden cache
	window.location.reload(true);
}
