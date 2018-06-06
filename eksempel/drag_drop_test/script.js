//- - - - - - SPIL - - - - - -

var antalGuleroedder = 0;
var timer;
gameBegyndTimer()

//- - - - - - gameBegyndTimer - - - - - -
function gameBegyndTimer() {
	timer = setTimeout(failure, 5000);
	timerBar();
	$(".gulerod").addClass("gulerod_puls");
}

//- - - - - - timerBar - - - - - -
function timerBar() {
	$("#timer_bar").addClass("timer_gaa_ned");
}

//- - - - - - allowDrop - - - - - -
function allowDrop(ev) {
	ev.preventDefault();
}

//- - - - - - drag - - - - - -
function drag(ev) {
	ev.dataTransfer.setData('text', ev.target.id);
	//	$(".gulerod").removeClass("gulerod_puls");
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
	antalGuleroedder++;
	console.log("antal gulerødder: " + antalGuleroedder);
	if (antalGuleroedder >= 3) {
		clearTimeout(timer);
		succes();
	}
}

//- - - - - - failure temp - - - - - -
function failure() {
	console.log("failure");
	$("#kanin_drop").hide();
	$("#timer_bar").hide();
	$(".gulerod").removeClass("gulerod_puls");
	document.getElementById("drag2").draggable = false;
	document.getElementById("drag3").draggable = false;
	document.getElementById("drag1").draggable = false;
}

//- - - - - - succes temp - - - - - -
function succes() {
	console.log("succes");
	$(".gulerod").removeClass("gulerod_puls");
	$("#timer_bar").addClass("timer_gaa_ned_paused");
}
