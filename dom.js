const form = document.getElementById("signupForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const terms = document.getElementById("terms");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const termsError = document.getElementById("termsError");

const resendBtn = document.getElementById("resendBtn");

function setError(input, errorEl, message) {
  errorEl.textContent = message;
  input.classList.add("invalid");
}

function clearError(input, errorEl) {
  errorEl.textContent = "";
  input.classList.remove("invalid");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  if (username.value.trim() === "") {
    setError(username, usernameError, "Username is required.");
    valid = false;
  } else {
    clearError(username, usernameError);
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    setError(email, emailError, "Email is required.");
    valid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    setError(email, emailError, "Please enter a valid email address.");
    valid = false;
  } else {
    clearError(email, emailError);
  }

  if (password.value.trim() === "") {
    setError(password, passwordError, "Password is required.");
    valid = false;
  } else if (password.value.trim().length < 8) {
    setError(
      password,
      passwordError,
      "Password must be at least 8 characters.",
    );
    valid = false;
  } else {
    clearError(password, passwordError);
  }

  if (!terms.checked) {
    termsError.textContent = "You must accept the terms.";
    valid = false;
  } else {
    termsError.textContent = "";
  }

  if (valid) {
    alert("Signup successful!");
    form.reset();
  }
});

let countdown = 10;
const timer = setInterval(() => {
  countdown--;
  if (countdown > 0) {
    resendBtn.textContent = `Resend Verification (${countdown}s)`;
  } else {
    clearInterval(timer);
    resendBtn.disabled = false;
    resendBtn.textContent = "Resend Verification";
  }
}, 1000);