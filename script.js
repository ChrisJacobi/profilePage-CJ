

const hamBtn = document.getElementById('hamburgerBtn');


hamBtn.addEventListener('click', function() {

	const navTab = document.querySelector('.navTab');

	

	if (navTab.classList.contains('dNone')) {
		navTab.classList.remove('dNone');
	
	}
	else {
		navTab.classList.add('dNone');
	}
});

const luck = document.querySelector('#hireHeader');

if (luck.classList.contains('hireHeader')) {
	luck.classList.remove('hireHeader');
}
else {
	luck.classList.add('hireHeader');
}

