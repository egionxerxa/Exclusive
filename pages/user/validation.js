const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{7,15}$/;

function showLoginModal(title, message) {
  const modal = document.getElementById("loginModal");
  const titleEl = document.getElementById("loginModalTitle");
  const messageEl = document.getElementById("loginModalMessage");
  const closeBtn = document.getElementById("loginModalClose");
  if (!modal || !titleEl || !messageEl || !closeBtn) return;
  titleEl.textContent = title;
  messageEl.textContent = message;
  modal.removeAttribute("hidden");
  closeBtn.focus();
  const closeModal = () => { modal.setAttribute("hidden", ""); };
  closeBtn.onclick = closeModal;
  modal.querySelector(".loginModalBackdrop").onclick = closeModal;
  const onKey = (e) => { if (e.key === "Escape") { closeModal(); modal.removeEventListener("keydown", onKey); } };
  modal.addEventListener("keydown", onKey);
}

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const identifier = document.getElementById("loginIdentifier").value.trim();
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

function showSignupModal(title, message) {
  const modal = document.getElementById("signupModal");
  const titleEl = document.getElementById("signupModalTitle");
  const messageEl = document.getElementById("signupModalMessage");
  const closeBtn = document.getElementById("signupModalClose");
  if (!modal || !titleEl || !messageEl || !closeBtn) return;
  titleEl.textContent = title;
  messageEl.textContent = message;
  modal.removeAttribute("hidden");
  closeBtn.focus();
  const closeModal = () => { modal.setAttribute("hidden", ""); };
  closeBtn.onclick = closeModal;
  modal.querySelector(".signupModalBackdrop").onclick = closeModal;
  const onKey = (e) => { if (e.key === "Escape") { closeModal(); modal.removeEventListener("keydown", onKey); } };
  modal.addEventListener("keydown", onKey);
}

const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("signupName").value.trim();
    const identifier = document.getElementById("signupIdentifier").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    if (name === "") {
      showSignupModal("Name required", "Please enter your name.");
      return;
    }
    if (name.length < 2) {
      showSignupModal("Name too short", "Name must be at least 2 characters long.");
      return;
    }
    if (identifier === "") {
      showSignupModal("Email or phone required", "Please enter your email or phone number.");
      return;
    }
    if (!emailRegex.test(identifier) && !phoneRegex.test(identifier)) {
      showSignupModal("Invalid email or phone", "Email must look like example@mail.com. Phone must be 7–15 digits.");
      return;
    }
    if (password === "") {
      showSignupModal("Password required", "Please enter a password.");
      return;
    }
    if (password.length < 6) {
      showSignupModal("Password too short", "Use at least 6 characters for your password.");
      return;
    }
    showSignupModal("Account created", "Your account has been created successfully.");
  });
}
