// slide left to right start

// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  
  // Listen for scroll event
  window.addEventListener('scroll', () => {
    const contents = document.querySelectorAll('.slide-left-to-right-content');
  
    contents.forEach(content => {
      if (isInViewport(content)) {
        content.classList.add('show');
      }
    });
  });
  
  // Also trigger on load
  window.addEventListener('load', () => {
    const contents = document.querySelectorAll('.slide-left-to-right-content');
  
    contents.forEach(content => {
      if (isInViewport(content)) {
        content.classList.add('show');
      }
    });
  });

// slide left to right end

// slide right to left start

// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  
  // Listen for scroll event
  window.addEventListener('scroll', () => {
    const contents = document.querySelectorAll('.slide-right-to-left-content');
  
    contents.forEach(content => {
      if (isInViewport(content)) {
        content.classList.add('show');
      }
    });
  });
  
  // Also trigger on load
  window.addEventListener('load', () => {
    const contents = document.querySelectorAll('.slide-right-to-left-content');
  
    contents.forEach(content => {
      if (isInViewport(content)) {
        content.classList.add('show');
      }
    });
  });

// slide right to left end

// slide bottom to top start

// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  
  // Listen for scroll event
  window.addEventListener('scroll', () => {
    const contents = document.querySelectorAll('.slide-bottom-to-top-content');
  
    contents.forEach(content => {
      if (isInViewport(content)) {
        content.classList.add('show');
      }
    });
  });
  
  // Also trigger on load
  window.addEventListener('load', () => {
    const contents = document.querySelectorAll('.slide-bottom-to-top-content');
  
    contents.forEach(content => {
      if (isInViewport(content)) {
        content.classList.add('show');
      }
    });
  });

// slide bottom to top start

// slide top to bottom start

// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  
  // Listen for scroll event
  window.addEventListener('scroll', () => {
    const contents = document.querySelectorAll('.slide-top-to-bottom-content');
  
    contents.forEach(content => {
      if (isInViewport(content)) {
        content.classList.add('show');
      }
    });
  });
  
  // Also trigger on load
  window.addEventListener('load', () => {
    const contents = document.querySelectorAll('.slide-top-to-bottom-content');
  
    contents.forEach(content => {
      if (isInViewport(content)) {
        content.classList.add('show');
      }
    });
  });

// slide top to bottom end