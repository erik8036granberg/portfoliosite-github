$(window).on("load", sidenErLoadet);



function sidenErLoadet() {
	console.log("sidenErLoadet");
	$(".start_button").on("click", lidlBaggrundslyd)
	$("#lidl_baggrundslyde").on("ended", lidlBaggrundslydeEnded);
}


function lidlBaggrundslyd() {
	console.log("lidlBaggrundslyd");

	$(".start_button").off("click");
	$(".start_button").text("Kører");
	$(".start_button").addClass("start_button_aktiveret");
	$("#lidl_baggrundslyde")[0].play();
	$("#lidl_baggrundslyde")[0].volume = 0.1;
	setTimeout(maelkPaaGulv, 5000);
}

function maelkPaaGulv() {
	console.log("maelkPaaGulv");
	$("#maelk_paa_gulv")[0].play();
	$("#maelk_paa_gulv").on("ended", maelkPaaGulvEnded);
}

function maelkPaaGulvEnded() {
	console.log("maelkPaaGulvEnded");
	$("#maelk_paa_gulv").off("ended");
	setTimeout(dialogA, 1000);
}

function dialogA() {
	console.log("dialogA");
	$("#dialog_a")[0].play();
	$("#dialog_a").on("ended", dialogAEnded);
}

function dialogAEnded() {
	console.log("dialogAEnded");
	$("#dialog_a").off("ended");
	setTimeout(dialogB, 1000);
}

function dialogB() {
	console.log("dialogB");
	$("#dialog_b")[0].play();
	$("#dialog_b").on("ended", dialogBEnded);
}

function dialogBEnded() {
	console.log("dialogBEnded");
	$("#dialog_b").off("ended");
	setTimeout(dialogC, 1000);
}

function dialogC() {
	console.log("dialogC");
	$("#dialog_c")[0].play();
	$("#dialog_c").on("ended", dialogCEnded);
}

function dialogCEnded() {
	console.log("dialogCEnded");
	$("#dialog_c").off("ended");
	setTimeout(dialogD, 1000);
}

function dialogD() {
	console.log("dialogD");
	$("#dialog_d")[0].play();
	$("#dialog_d").on("ended", dialogDEnded);
}

function dialogDEnded() {
	console.log("dialogDEnded");
	$("#dialog_d").off("ended");
	setTimeout(doerSmaek, 1000);
}

function doerSmaek() {
	console.log("doerSmaek");
	$("#doersmaek").on("ended", doerSmaekEnded);
}

function doerSmaekEnded() {
	console.log("doerSmaekEnded");
	$("#doersmaek").off("ended");
}

function lidlBaggrundslydeEnded() {
	console.log("lidl_baggrundslydeEnded");
	$("#lidl_baggrundslyde").off("ended");
	$(".start_button").text("Slut");
}
