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