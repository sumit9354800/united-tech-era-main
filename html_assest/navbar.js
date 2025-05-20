const floatingNavbar = document.getElementById('stuck-navbar');
const floatingNavbar2 = document.getElementById('stuck-navbar2');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY && currentScrollY > 100) {
        // Scrolling up and not near top
        floatingNavbar.classList.add('visible');
        floatingNavbar2.classList.add('visible');
      } else {
        // Scrolling down OR near top
        floatingNavbar.classList.remove('visible');
        floatingNavbar2.classList.remove('visible');
      }

      lastScrollY = currentScrollY;
    });

    

