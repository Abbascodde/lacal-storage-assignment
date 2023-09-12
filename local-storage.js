function signup() {
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const gender = document.getElementById("gender").value;

  if (firstName && lastName && username && password && confirmPassword && gender) {
      if (password === confirmPassword) {

          //  localStorage data
          localStorage.setItem("firstName", firstName);
          localStorage.setItem("lastName", lastName);
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          localStorage.setItem("gender", gender);
          validate("Signup successful! You can now log in.", false);
      } else {
        validate("Passwords do not match.", true);
      }
  } else {
    validate("Please fill in all fields.", true);
  }
}

function login() {
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  const loginUsername = document.getElementById("login-username").value;
  const loginPassword = document.getElementById("login-password").value;

  if (loginUsername === storedUsername && loginPassword === storedPassword) {
    validate("Login successful!", false);
  } else {
    validate("Incorrect username or password. Please try again.", true);
  }
}

function validate(message, isError) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
  messageDiv.style.color = isError ? "red" : "green";
}
