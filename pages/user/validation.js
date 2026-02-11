const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{7,15}$/;

function showLoginModal(title, message) {
  var modal = document.getElementById("loginModal");
  var titleEl = document.getElementById("loginModalTitle");
  var messageEl = document.getElementById("loginModalMessage");
  var closeBtn = document.getElementById("loginModalClose");
  if (!modal || !titleEl || !messageEl || !closeBtn) return;
  titleEl.textContent = title;
  messageEl.textContent = message;
  modal.removeAttribute("hidden");
  closeBtn.focus();
  function closeModal() {
    modal.setAttribute("hidden", "");
  }
  closeBtn.onclick = closeModal;
  modal.querySelector(".loginModalBackdrop").onclick = closeModal;
  modal.addEventListener("keydown", function onKey(e) {
    if (e.key === "Escape") {
      closeModal();
      modal.removeEventListener("keydown", onKey);
    }
  });
}

var loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var identifier = document.getElementById("loginIdentifier").value.trim();
    var password = document.getElementById("loginPassword").value.trim();

    if (identifier === "") {
      showLoginModal(
        "We couldn’t log you in",
        "Please enter your email or phone number so we can find your account."
      );
      return;
    }

    if (!emailRegex.test(identifier) && !phoneRegex.test(identifier)) {
      showLoginModal(
        "Check your email or phone number",
        "Your email should look like name@example.com. If you use a phone number, enter 7 to 15 digits only."
      );
      return;
    }

    if (password === "") {
      showLoginModal(
        "Password is required",
        "Please enter your password to continue."
      );
      return;
    }

    if (password.length < 6) {
      showLoginModal(
        "Password is too short",
        "For your security, please use at least 6 characters for your password."
      );
      return;
    }

    showLoginModal("Welcome back!", "You’re logged in. We’re taking you to your account.");
  });
}

var signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("signupName").value.trim();
    var identifier = document.getElementById("signupIdentifier").value.trim();
    var password = document.getElementById("signupPassword").value.trim();

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
