		$(".menuknap").on("click", function () {
			$(".dropdown-content").toggleClass("expanded");
		});

		$(".menulink").on("click", function () {
			$(".dropdown-content").removeClass("expanded");
		});
		$(".nav-down").on("mouseleave", function () {
			$(".dropdown-content").removeClass("expanded");
		});
