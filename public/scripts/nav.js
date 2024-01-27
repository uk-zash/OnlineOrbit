 document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const container2 = document.querySelector('.container2');

    burgerMenu.addEventListener('click', function () {
      container2.classList.toggle('active');
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        container2.classList.remove('active');
      }
    });
    document.addEventListener('click', function (event) {
        if (!container2.contains(event.target) && !burgerMenu.contains(event.target)) {
          container2.classList.remove('active');
        }
      });
  });
