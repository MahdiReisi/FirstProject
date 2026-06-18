const userNameInput = document.getElementById('user-name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const addressInput = document.getElementById('address');
const passInput = document.getElementById('password');
const repatPass = document.getElementById('password-repeat');
const ckeckRepeat = document.getElementById('ckeckRepeat');
const status = document.getElementById('status');
const toggleSpan = document.getElementById('toggle');
const finishButton = document.getElementById('finish-button');

function checkPass() {
    const p = passInput.value;
    const len = p.length;

    if (len < 6) {
        status.textContent = 'رمز خیلی کوتاه است';
        status.style.color = 'red';
        return false;
    }

    if (!/[0-9]/.test(p)) {
        status.textContent = 'رمز باید شامل عدد باشد ';
        status.style.color = 'red';
        return false;
    }


    if (!/[!@#$%^&*()_+]/.test(p)) {
        status.textContent = 'رمز باید شامل حروف خاص(!@#$%^&*()_+) باشد';
        status.style.color = 'orange';
        return false;
    }

    status.textContent = 'رمز قابل قبول است ';
    status.style.color = 'green';
    return true;
}

passInput.addEventListener('input', checkPass);

toggleSpan.addEventListener("mouseenter", () => {
    passInput.type = 'text';
});
toggleSpan.addEventListener("mouseleave", () => {
    passInput.type = 'password';
});

function checkRepeat() {
    const pass = passInput.value;
    const repeat = repatPass.value;

    if (pass === repeat && pass !== '') {
        ckeckRepeat.textContent = 'رمز عبور صجیج است ';
        ckeckRepeat.style.color = 'green';
        return true;
    } else {
        ckeckRepeat.textContent = 'رمز عبور مطابقت ندارد';
        ckeckRepeat.style.color = 'red';
        return false;
    }
}

repatPass.addEventListener('input', checkRepeat);

finishButton.addEventListener('click', function (event) {
    event.preventDefault();

    const isPassOk = checkPass();
    const isRepeatOk = checkRepeat();
    if (!isPassOk || !isRepeatOk) {
        return;
    }

    const username = userNameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();
    const address = addressInput.value.trim();
    const password = passInput.value;


    if (!username || !phone || !email || !address) {
        alert("لطفاً تمام فیلدها را پر کنید ⚠️");
        return;
    }


    const userData = {
        username,
        phone,
        email,
        address,
        password
    };

    localStorage.setItem('currentUser', JSON.stringify(userData));
    localStorage.setItem('loggedIn', 'true');
    alert("ثبت‌نام با موفقیت انجام شد ✅");

    window.location.href = 'http://127.0.0.1:8080/first-project/Loading/';
});

