// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Add this script to your existing JavaScript or create a new script block
document.addEventListener("DOMContentLoaded", function() {
  const reviewsContainer = document.querySelector('.reviews');
  const reviews = document.querySelectorAll('.review');

  let currentIndex = 0;

  function showNextReview() {
    currentIndex = (currentIndex + 1) % reviews.length;
    updateReviews();
  }

  function updateReviews() {
    const newTransformValue = -currentIndex * 100 + '%';
    reviewsContainer.style.transform = 'translateX(' + newTransformValue + ')';
  }

  setInterval(showNextReview, 5000); 

});



  document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      card.addEventListener('click', function () {
        if (window.innerWidth <= 753) {
          // Flip the card on small screens when tapped
          flipCard(this);
        }
      });

      // Hover effect on larger screens
      card.addEventListener('mouseenter', function () {
        if (window.innerWidth > 753) {
          flipCard(this);
        }
      });

      card.addEventListener('mouseleave', function () {
        if (window.innerWidth > 753) {
          flipCard(this);
        }
      });
    });

    function flipCard(card) {
      card.classList.toggle('is-flipped');
    }
  });
