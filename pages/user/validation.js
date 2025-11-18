const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{7,15}$/;

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {

    const identifier = document.getElementById("loginIdentifier").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (identifier === "") {
      alert("Email or Phone field cannot be empty.");
      return;
    }

    if (!emailRegex.test(identifier) && !phoneRegex.test(identifier)) {
      alert("Invalid Email or Phone number.\n\n• Email must look like: example@mail.com\n• Phone must be 7–15 digits");
      return;
    }

    if (password === "") {
      alert("Password cannot be empty.");
      return;
    }

    if (password.length < 6) {
      alert("Password is too short.\nIt must be at least 6 characters.");
      return;
    }

    alert("Login successful!");
  });
}

const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {

    const name = document.getElementById("signupName").value.trim();
    const identifier = document.getElementById("signupIdentifier").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    if (name === "") {
      alert("Name cannot be empty.");
      return;
    }

    if (name.length < 2) {
      alert("Name must be at least 2 characters long.");
      return;
    }

    if (identifier === "") {
      alert("Email or Phone number cannot be empty.");
      return;
    }

    if (!emailRegex.test(identifier) && !phoneRegex.test(identifier)) {
      alert("Invalid Email or Phone number.\n\n• Email must look like: example@mail.com\n• Phone must be 7–15 digits");
      return;
    }

    if (password === "") {
      alert("Password cannot be empty.");
      return;
    }

    if (password.length < 6) {
      alert("Password is too short.\nIt must be at least 6 characters.");
      return;
    }

    alert("Account created successfully!");
  });
}

