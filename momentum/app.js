const LoginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  console.log(username);
}

function handleLinkClick(event) {
  console.dir(event);

  event.preventDefault();
}

LoginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
