
//  START HAMBURGER NAV
const hamBtn = document.getElementById('hamburgerBtn');

const luck = document.querySelector('.luck');

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
	
		if (luck.classList.contains('luck')) {
			luck.classList.add('dNone');
		}
	}	
	else {
		navTab.classList.add('dNone')
		luck.classList.remove('dNone');
	}
});

//  END HAMBURGER NAV
