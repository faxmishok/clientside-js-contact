const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	
	const fnameValue = fname.value.trim();
	const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const messageValue = message.value.trim();
	
	if(fnameValue === '') {
		setErrorFor(fname, 'First name cannot be blank');
	} else {
		setSuccessFor(fname);
    }

    if(lnameValue === '' ) {
		setErrorFor(lname, 'Last name cannot be blank');
	} else {
		setSuccessFor(lname);
	}
	
	if(emailValue === '' ) {
		setErrorFor(email, 'E-mail cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(phoneValue === '' ){
        setErrorFor(phone, 'Phone number cannot be blank');
    } else {
        setSuccessFor(phone);
    }

    if(messageValue === '' ){
        setErrorFor(message,'Message field is empty !');
    } else {
        setSuccessFor(message);
    }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}