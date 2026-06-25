document.getElementById('signUpForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    if (username.value.trim() === "") {
        usernameError.textContent = 'Username is required';
        username.style.borderColor = 'red';
        isValid = false;
    } else {
        usernameError.textContent = '';
        username.style.borderColor = '';
    }

    if (email.value.trim() === "") {
        emailError.textContent = 'Email address is required';
        email.style.borderColor = 'red';
        isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        emailError.textContent = 'Please enter a valid email address';
        email.style.borderColor = 'red';
        isValid = false;
    } else {
        emailError.textContent = '';
        email.style.borderColor = '';
    }

    if (password.value.trim() === "") {
        passwordError.textContent = 'Password is required';
        password.style.borderColor = 'red';
        isValid = false;
    } else if (password.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long';
        password.style.borderColor = 'red';
        isValid = false;
    } else {
        passwordError.textContent = '';
        password.style.borderColor = '';
    }

    if (isValid) {
        console.log('All the inputs from user are valid');
    } else {
        console.log('failed to submit, some of the fields are invalid');
    }
});

let count = 10;
const resendBtn = document.getElementById('resendBtn');
const timer = setInterval(() => {
    count--;
    resendBtn.innerText = `Resend Verification (${count}s)`;
    if (count <= 0) {
        clearInterval(timer);
        resendBtn.disabled = false;
        resendBtn.innerText = "Resend Verification";
    }
}, 1000);

document.getElementById('resendBtn').addEventListener('click', function() {
    alert("Verification code resent!");
})