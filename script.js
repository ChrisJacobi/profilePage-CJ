

const hamBtn = document.querySelectorAll('hamburgerBtn');


hamBtn.addEventListener('click', function() {

	const navTab = document.getElementsByClassName('navTab');

	if (navTab.classList.contains("dNone")) {
		navTab.classList.remove("dNone");
	}
	else {
		navTab.classList.add("dNone");
	}

});

