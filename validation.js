// 3 user inputs validation (username, email, password)

document.getElementById('signUpForm').addEventListener('submit', function (event){

    event.preventDefault();

    let isValid = true;

    // get alements with IDs
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password')


    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');


// perform validations 

// username
 if(username.value.trim()=== ''){
    usernameError.textContent = 'Username is required';
    isValid = false;
 }

 // email

 const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

 if(email.value.trim()=== ''){
    emailError.textContent = 'Email address is required';
    isValid = false;
 }
 else if (!emailRegex.test(email.value.trim())){
    emailError.textContent = 'Please enter a valid email address'
    isValid = false
 }

 // password

 if(password.value.trim()=== ''){
    passwordError.textContent = 'password is required';
    isValid = false
 }
 else if (password.value.length >= 6){
    passwordError.textContent = 'Password must be atleast 6 characters long';
    isValid = false
 }


 if(isValid){
    console.log('All the inputs from user are valid');
 }
 else{
    console.log('failed to submit, some of the fields are invalid')
 }

});