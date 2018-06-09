$(window).on("load", sidenErLoadet);



function sidenErLoadet() {
	console.log("sidenErLoadet");
	$(".start_button").on("click", kopimaskine)
}


function kopimaskine() {
	console.log("kopimaskine");

	$(".start_button").off("click");
	$(".start_button").text("Kører");
	$(".start_button").addClass("start_button_aktiveret");
	$("#kopimaskine_lyd")[0].play();
	$("#kopimaskine_lyd")[0].volume = 0.7;
	setTimeout(dialog_1_play, 3000);
}

function dialog_1_play() {
	console.log("dialog_1_play");
	$("#dialog_1_lyd")[0].play();
	$("#dialog_1_lyd").on("ended", dialog_1_ended);
}

function dialog_1_ended() {
	$("#dialog_1_lyd").off("ended");
	console.log("dialog_1_ended");
	setTimeout(dialog_2_play, 1000);
}

function dialog_2_play() {
	console.log("dialog_2_play");
	$("#dialog_2_lyd")[0].play();
	$("#dialog_2_lyd").on("ended", dialog_2_ended);
}

function dialog_2_ended() {
	$("#dialog_2_lyd").off("ended");
	console.log("dialog_2_ended");
	setTimeout(dialog_3_play, 1000);
}

function dialog_3_play() {
	console.log("dialog_3_play");
	$("#dialog_3_lyd")[0].play();
	$("#dialog_3_lyd").on("ended", dialog_3_ended);
}

function dialog_3_ended() {
	$("#dialog_3_lyd").off("ended");
	console.log("dialog_3_ended");
	setTimeout(dialog_4_play, 1000);
}

function dialog_4_play() {
	console.log("dialog_3_play");
	$("#dialog_4_lyd")[0].play();
	$("#dialog_4_lyd").on("ended", dialog_4_ended)
}

function dialog_4_ended() {
	$("#dialog_4_lyd").off("ended");
	console.log("dialog_4_ended");
	setTimeout(glas_lyd, 1000);
}

function glas_lyd() {
	console.log("glas_lyd");
	$("#glas_lyd")[0].play();
}
