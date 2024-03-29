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
  })
  function copyToClipboard(element) {
    const textToCopy = element.innerText;
  
    navigator.clipboard.writeText(textToCopy).then(function() {
      // Success callback
      showCopyPopup(element);
    }, function() {
      // Error callback
      console.error('Unable to copy text to clipboard');
    });
  }
  
  function showCopyPopup(element) {
    const popup = document.createElement('div');
    popup.className = 'copy-popup';
    popup.innerText = 'Copied!';
    
    // Append popup to the body
    document.body.appendChild(popup);
  
    // Position the popup near the copied element
    const rect = element.getBoundingClientRect();
    popup.style.top = window.scrollY + rect.top + 'px';  // Use window.scrollY
    popup.style.left = rect.left + 'px';
  
    // Remove the popup after a short delay
    setTimeout(function() {
      document.body.removeChild(popup);
    }, 1500);
  }