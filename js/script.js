const loginBtnSpan = document.getElementById('login-btn');
const userIconNode = document.querySelectorAll('.user-action .icon');

if (loginBtnSpan) {
    document.addEventListener('DOMContentLoaded', function () {
        const loggedIn = localStorage.getItem('loggedIn');
        const userDataString = localStorage.getItem('currentUser');
        if (loggedIn === 'true' && userDataString) {
            const userData = JSON.parse(userDataString);

            const usernameText = userData.username && userData.username.trim() !== '' ? userData.username : 'جساب کاربری من ';

            loginBtnSpan.textContent = `خوش آمدید ${usernameText}`;
            userIconNode.forEach(icon => {
                icon.style.opacity = '1';
            });
        } else {
            loginBtnSpan.textContent = 'ورود به جساب کاربری';
            userIconNode.forEach(icon => {
                icon.style.opacity = '0';
            });
        }
    });
}


/*ذخیره کردن اطلاعات کاربر */





/*تاریخ و ساعت  */
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const date = now.toLocaleDateString('fa-IR');
    document.getElementById('current-time').textContent = time;
    document.getElementById('current-date').textContent = date;
}
setInterval(updateClock, 1000);
updateClock();
/*تاریخ و ساعت  */
/*دکمه تعیر رنگ  */
const changeBtn = document.querySelector('.action-button');
const textChangeBtn = document.querySelector('.text-change-btn');
changeBtn.addEventListener("mouseover", () => {
    textChangeBtn.style.opacity = '1';
    setTimeout(() => {
        textChangeBtn.style.opacity = '0';
    }, 3000);
})
/*دکمه تعیر رنگ  */

/*ساخت دکمه تغییر رنگ پس زمینه هدر ها  */
const myHeaderColors = [
    '#2b84a3',
    '#3c5661',
    '#233d48',
    '#5415c1',
    '#712acf',
    '#a04cb9',
    '#487eb0',
    '#00a8ff',
    '#e84118',
    '#273c75',
    '#40739e',
    '#8c7ae6',
];
const myHeaderColorsTwo = [
    '#40739e',
    '#192a56',
    '#5fcca3',
    '#3c63b9',
    '#bf4936',
    '#411940',
    '#9b3f4d',
    '#EAB543',
    '#9AECDB',
    '#3B3B98',
    '#B33771',
    '#FEA47F',
    '#3fccb0',
    '#53d188',
    '#4ea6e1',
    '#3f5b78',


];
function getRandomHeaderColor() {
    const i = Math.floor(Math.random() * myHeaderColors.length);
    return myHeaderColors[i];
}
function getRandomHeaderColorTwo() {
    const j = Math.floor(Math.random() * myHeaderColorsTwo.length);
    return myHeaderColors[j];
}
function changeHeadersBackground() {
    const newColor = getRandomHeaderColor();
    const newColorTwo = getRandomHeaderColorTwo()
    document.querySelector('.header-top').style.backgroundColor = newColor;
    document.querySelector('.header-bottom').style.backgroundColor = newColorTwo;
    document.querySelector('.header-container').style.backgroundColor = newColorTwo;
}

document.querySelector('.action-button').addEventListener('click', changeHeadersBackground);
/*ساخت دکمه تغییر رنگ پس زمینه هدر ها  */
/* بخش استوری ها  */
const itemsStory = document.querySelectorAll('.carousel-item');
const carousleTrackStory = document.querySelector('.carousel-track');
const prevStoryBtn = document.querySelector('.carousel-arrow.left');
const nextStoryBtn = document.querySelector('.carousel-arrow.right');

const itemWidthStory = 140;
const itemsToScroll = 3;
const totalItems = itemsStory.length;

let currentIndex = 0;

function updateCarousel() {
    const scrollAmount = currentIndex * itemWidthStory;

    // *** مهم: جهت مثبت برای RTL ***
    carousleTrackStory.style.transform = `translateX(${scrollAmount}px)`;


    // دکمه قبلی وقتی به آخر رسیدیم مخفی میشه
    if (scrollAmount >= carousleTrackStory.scrollWidth - carousleTrackStory.clientWidth - 5) {
        nextStoryBtn.style.display = 'none';
    } else {
        nextStoryBtn.style.display = 'flex';
    }

    // اگر در ابتدای کاملاً چپ کانتینر هستیم
    if (scrollAmount <= 0) {
        prevStoryBtn.style.display = 'none';
    } else {
        prevStoryBtn.style.display = 'flex';
    }
}

nextStoryBtn.addEventListener('click', () => {
    currentIndex += itemsToScroll;
    updateCarousel();
});

prevStoryBtn.addEventListener('click', () => {
    currentIndex -= itemsToScroll;
    if (currentIndex < 0) currentIndex = 0;
    updateCarousel();
});

/* بخش استوری ها  */


// پیدا کردن عنصر مورد نظر از طریق ID
const toDoButton = document.getElementById('todolist-link');
// اضافه کردن رویداد کلیک
toDoButton.addEventListener('click', function () {
    // تغییر آدرس صفحه به مسیر مورد نظر
    window.location.href = "http://127.0.0.1:8080/first-project/todolist/";
});
const calcButton = document.getElementById('calculator-link');
// اضافه کردن رویداد کلیک
calcButton.addEventListener('click', function () {
    // تغییر آدرس صفحه به مسیر مورد نظر
    window.location.href = "http://127.0.0.1:8080/first-project/calculator/";
});
const diceGame = document.getElementById('dice-game-link');
// اضافه کردن رویداد کلیک
diceGame.addEventListener('click', function () {
    // تغییر آدرس صفحه به مسیر مورد نظر
    window.location.href = "http://127.0.0.1:8080/first-project/dicegame/";
});
const rockButton = document.getElementById('rock-paper-scissors-link');
// اضافه کردن رویداد کلیک
rockButton.addEventListener('click', function () {
    // تغییر آدرس صفحه به مسیر مورد نظر
    window.location.href = "http://127.0.0.1:8080/first-project/rock-paper-scissors/";
});


/*سبد خرید  */
import { updateCartBadge } from '../../shopping-cart/cartmanager.js';


document.addEventListener('DOMContentLoaded', updateCartBadge);
/*سبدخرید */