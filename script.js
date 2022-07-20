

const hamBtn = document.getElementById('hamburgerBtn');


hamBtn.addEventListener('click', function() {

	const navTab = document.querySelector('.navTab');

	const luck = document.querySelector('#hireHeader');

	if (navTab.classList.contains('dNone')) {
		navTab.classList.remove('dNone');
	
		// if (luck.classList.contains('hireHeader')) {
		// 	luck.classList.remove('hireHeader');
		// }
		// else {
		// 	luck.classList.add('hireHeader');
		// }
	}
	else {
		navTab.classList.add('dNone');
	}


});

