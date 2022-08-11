

// Input elements
const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const tel = document.getElementById('tel');

form.addEventListener('submit', (e) => { // e is short reference for event object which goes to e handlers = click submit, prevent page from resfreshing
    e.preventDefault(); // Arrow function, prevents refresh on submit - event handlers 

    checkInputs(); // Checks user inputs
});

function checkInputs() { 
    // Gets the values from the inputs
    
    const fullnameValue = fullname.value.trim(); // Trim removes white space from both sides of a string and returns new string with modifying original
    const emailValue = email.value.trim();
    const telValue = tel.value.trim();

    // If else conditions

    // Full name
    if(fullnameValue === '') { // If fullname input is empty - identical
        // If fullname is empty, error displays
        setErrorFor(fullname, 'Full name cannot be blank') 
    } else {
        // If not empty, its valid
        setSuccessFor(fullname);
    }

    // Email
    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)) { // Uses the isEmail function to find out if email is valid
        setErrorFor(email, 'Email is not valid'); 
    } else {
        setSuccessFor(email);
    }

    // Phone Number
    if(telValue === '') {
        setErrorFor(tel, 'Phone number cannot be blank');
    } else if(!isTel(telValue)) { // Uses the isTel function to find out if its a valid phonenumber
        setErrorFor(tel, 'Has to be a valid phone number & country code');
    } else {
        setSuccessFor(tel);
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // Form control div
    const small = formControl.querySelector('small') 

    // Adds error message inside of small tag
    small.innerText = message;

    // Adds an error class to form control div
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    
    // Adds a success class to form control div
    formControl.className = 'form-control success';
}

// Regex function - returns true or false depending on the email input being valid
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//Regex function - 10 digit phone number with country code
function isTel(tel) {
    return /^\+(?:[0-9]●?){6,14}[0-9]$/.test(tel);
}