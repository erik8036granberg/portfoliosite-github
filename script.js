		$(".menuknap").on("click", function () {
			$(".dropdown-content").toggleClass("expanded");
			$('.nav-down').toggleClass("nav_bg");
		});

		$(".menulink").on("click", function () {
			$(".dropdown-content").removeClass("expanded");
			$(".nav-down").removeClass("nav_bg");
		});
		$(".nav-down").on("mouseleave", function () {
			$(".dropdown-content").removeClass("expanded");
			$(".nav-down").removeClass("nav_bg");
		});
