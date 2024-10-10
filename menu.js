// Sticky header transparency
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop <= 0) {
        header.classList.add('transparent');
      } else {
        header.classList.remove('transparent');
      }
      
      lastScrollTop = scrollTop;
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        }
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
      }
    });

    // language switcher
    document.querySelector('.language-switcher select').addEventListener('change', function() {
        const englishContent = document.getElementById('content-en');
        const frenchContent = document.getElementById('content-fr');
        
        if (this.value === 'fr') {
            englishContent.style.display = 'none';
            frenchContent.style.display = 'block';
            document.documentElement.lang = 'fr'
        }
        if (this.value === 'en') {
            englishContent.style.display = 'block';
            frenchContent.style.display = 'none';
            document.documentElement.lang = 'en'
        }
    });