const newsletterContainer = document.getElementById("newsletter-container");
const success = document.getElementById("success");
const spinner = document.getElementById("spinner");
const form = document.getElementById("form");
const messageElement = document.getElementById("message");
const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");
const illustrationSignUp = document.getElementById("illustration-sign-up");


if (window.innerWidth <= "700") {
  illustrationSignUp.src = "./images/illustration-sign-up-mobile.svg";
}

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  const email = data.email;

  if (validateEmail(email)) {
    displayLoadingState();
    processFormSubmission(email);
  } else {
    displayErrorState();
  }
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function displayLoadingState() {
  submitBtn.style.background =
    "linear-gradient(to right, hsl(4, 100%, 72%), hsl(4, 100%, 65%))";
  submitBtn.style.boxShadow = "0 5px 12px hsl(4, 100%, 67%)";
  messageElement.textContent = "";
  emailInput.style.border = "1px solid grey";
}

function processFormSubmission(email) {
  let timeRemaining = 2;
  const intervalId = setInterval(() => {
    if (timeRemaining <= 0) {
      clearInterval(intervalId);
      displaySuccessState(email);
    } else {
      spinner.style.display = "block";
      success.style.display = "none";
      newsletterContainer.style.display = "none";
      timeRemaining -= 1;
    }
  }, 1000);
}

function displaySuccessState(email) {
  spinner.style.display = "none";
  success.style.display = "flex";
  success.innerHTML = `
    <div>
      <img alt="marker image" src="./images/icon-list.svg"/>
      <h1>Thanks for subscribing!</h1>
      <p>A confirmation email has been sent to <b>${email}</b>. Please open it and click the button inside to confirm your subscription</p>
      <button onclick="dismiss()">Dismiss message</button>
    </div>
  `;
}

function displayErrorState() {
  messageElement.textContent = "Valid email required";
  messageElement.style.color = "red";
  emailInput.style.color = "rgb(247, 117, 117)";
  emailInput.style.background = "rgb(240, 200, 200)";
  emailInput.style.border = "1px solid red";
}

function dismiss() {
  newsletterContainer.style.display = "flex";
  success.style.display = "none";
}
