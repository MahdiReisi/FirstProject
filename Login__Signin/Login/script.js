const loginUserInput = document.getElementById('usernameInput');
const loginPassInput = document.getElementById('passwordInput');
const loginBtn = document.getElementById('login-button');
const loginToggleSpan = document.getElementById('toggle');
let loginStatusElem = document.getElementById('login-status');


if (loginUserInput && loginPassInput && loginBtn) {
  loginToggleSpan.addEventListener('mouseenter', () => {
    loginPassInput.type = 'text'
  });
  loginToggleSpan.addEventListener('mouseleave', () => {
    loginPassInput.type = 'password'
  });
}
loginBtn.addEventListener('click', function (event) {
  event.preventDefault();

  const enteredUsername = loginUserInput.value.trim();
  const enteredPassword = loginPassInput.value;


  const userDataString = localStorage.getItem('currentUser');

  if (!userDataString) {
    loginStatusElem.textContent = 'کاربری پیدا نشد . لطفا ابتدا ثبت نام کنید';
    loginStatusElem.style.color = 'red';
    return;
  }

  const userData = JSON.parse(userDataString);

  if (enteredUsername === userData.username && enteredPassword === userData.password) {
    loginStatusElem.textContent = 'ورود موفق بود .';
    loginStatusElem.style.color = 'green';

    localStorage.setItem('loggedIn', 'true');
    window.location.href = "http://127.0.0.1:8080/first-project/Loading/";
  } else {
    loginStatusElem.textContent = 'نام کاربری یا رمز عبور اشتباه است';
    loginStatusElem.style.color = 'orange';
  }

});

