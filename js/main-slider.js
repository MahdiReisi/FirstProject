document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.main-slider-nav.prev');
  const nextBtn = document.querySelector('.slider-nav.next');
  const sliderWrapper = document.querySelector('.slider-wrapper');

  let currentSlideIndex = 0;
  let autoSlideInterval;


  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    if (slides[index]) {
      slides[index].classList.add('active');
    }

    if (dots[index]) {
      dots[index].classList.add('active');
    }

    
  }

  function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
  }

  function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
  }
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      stopAutoSlide();
      prevSlide();
      startAutoSlide();
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      stopAutoSlide();
      currentSlideIndex = index;
      showSlide(currentSlideIndex);
      startAutoSlide();
    });
  });

  const SliderContainer = document.querySelector('.image-slider-container');
  if (SliderContainer) {
    SliderContainer.addEventListener('mouseenter', stopAutoSlide);
    SliderContainer.addEventListener('mouseleave', startAutoSlide);
  }

  showSlide(currentSlideIndex);
  startAutoSlide();
})