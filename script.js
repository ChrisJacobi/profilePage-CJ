
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




 // START CONTACT FORM 

var fields = {};

 document.addEventListener("DOMContentLoaded", function() {
 	fields.firstName = document.getElementById('firstName');
 	fields.lastName = document.getElementById('lastName');
 	fields.email = document.getElementById('email');
 	fields.select = document.getElementById('reason');
	fields.messageMe = document.getElementById('messageMe');
   });



// check to see if value is empty, a number, or a correctly formatted email

function isNotEmpty(value) {
	if (value === null || typeof value === 'undefined' ) return false;

	return (value.length > 0);
   }

function isNumber(num) {
	return (num.length > 0) && !isNaN(num);
   }

function isEmail(email) {
	let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; // regex expression specifies a search pattern

	return regex.test(String(email).toLowerCase());
   }





// checks value conditions and colors invalid fields red

function fieldValidation(field, validationFunction) {

	if (field === null) return false;
		let isFieldValid = validationFunction(field.value)
	if (!isFieldValid) {
		field.className = 'invalidRed';
	} else {
		field.className = '';
	}
	return isFieldValid;
   }


function isValid() {
	var valid = true;
	
	valid &= fieldValidation(fields.firstName, isNotEmpty);
	valid &= fieldValidation(fields.lastName, isNotEmpty);
	valid &= fieldValidation(fields.email, isEmail);
	valid &= fieldValidation(fields.select, isNotEmpty);
	valid &= fieldValidation(fields.messageMe, isNotEmpty);
   
	return valid;
   };

//changes selector back to white after click on invalid
let rsn = document.getElementById('reason');

rsn.addEventListener('click', function() {
	rsn.className = '';

})

// send contact
function sendContact() {

	if (isValid()) {
		
		alert('Thanks for contacting me, I will get back to you soon.')

	}	else {

		alert('Invalid entry, please try again')

	}
};
// END CONTACT FORM





