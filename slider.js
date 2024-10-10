const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    let currentIndex = 0;

    function updateSliderPosition() {
      const slideWidth = slides[0].offsetWidth;
      slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      updateArrowVisibility();
    }

    function updateArrowVisibility() {
      arrowLeft.style.opacity = currentIndex === 0 ? '0' : '1';
      arrowRight.style.opacity = currentIndex >= slides.length - 1 ? '0' : '1';
    }

    function showNextSlide() {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSliderPosition();
      }
    }

    function showPrevSlide() {
      if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
      }
    }

    arrowLeft.addEventListener('click', showPrevSlide);
    arrowRight.addEventListener('click', showNextSlide);

    // Adjust slider on window resize
    window.addEventListener('resize', updateSliderPosition);

    // Initial update
    updateSliderPosition();