document.addEventListener("DOMContentLoaded", () => {
    const storyTrack = document.querySelector('.category-carousel-track');
    const track = document.querySelector(".category-carousel-track");
    
    // کپی کردن آیتم‌ها برای ایجاد اثر بی‌نهایت (حداقل ۲ بار تکرار)
    const originalItems = Array.from(storyTrack.children);
    originalItems.forEach(item => {
        storyTrack.appendChild(item.cloneNode(true));
       // storyTrack.appendChild(item.cloneNode(true));
    });

    let scrollPos = 0;
    const speed = 1.5; // سرعت حرکت (پیکسل در هر فریم)
    let animationId;

    function animate() {
        scrollPos += speed; // حرکت به چپ در RTL

        // بررسی اینکه آیا به نیمه رسیده‌ایم تا به اول برگردیم (برای چرخه بی‌نهایت)
        if (Math.abs(scrollPos) >= (track.scrollWidth / 3)) {
            scrollPos = 0;
        }

        track.style.transform = `translateX(${scrollPos}px)`;
        animationId = requestAnimationFrame(animate);
    }

    // شروع انیمیشن
    animationId = requestAnimationFrame(animate);

    // مدیریت توقف با موس
    const carouselContainer = document.querySelector('.category-carousel');
    
    carouselContainer.addEventListener('mouseenter', () => {
        cancelAnimationFrame(animationId);
    });

    carouselContainer.addEventListener('mouseleave', () => {
        animationId = requestAnimationFrame(animate);
    });
});
