
//  START HAMBURGER NAV

const hamBtn = document.getElementById('hamburgerBtn');

const navTab = document.querySelector('.navTab');

function xBtn(){

	if (navTab.classList.contains('xBtn')) {
		navTab.classList.remove('xBtn')
		hamBtn.innerText = ('x');
	}
	else {
		navTab.classList.add('xBtn')
		hamBtn.innerHTML = ('&#9776')
	}
}


hamBtn.addEventListener('click', function() {

	xBtn();

	if (navTab.classList.contains('dNone')) {
		navTab.classList.remove('dNone');
	}	
	else {
		navTab.classList.add('dNone');
	}
});

//  END HAMBURGER NAV
