// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1); // Extract the section ID
    const targetElement = document.getElementById(targetId);

    // Scroll to the target section
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Back to Top Button
document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.getElementById("backToTop");

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // Current scroll position
    const viewportHeight = window.innerHeight; // Height of the viewport
    const pageHeight = document.documentElement.scrollHeight; // Total page height
    const buttonVisibilityOffset = 100; // Minimum scroll position to show the button
    const hideButtonOffset = 450; // Distance from the bottom of the page to hide the button

    // Show the button when scrolling up and hide it when scrolling to the bottom
    const distanceToBottom = pageHeight - (scrollPosition + viewportHeight);

    if (scrollPosition > buttonVisibilityOffset && distanceToBottom > hideButtonOffset) {
      // Show the button
      backToTopButton.classList.add("show");
      backToTopButton.classList.remove("hide");
      backToTopButton.style.position = "fixed"; // Keep the button fixed at the viewport bottom
      backToTopButton.style.bottom = `10px`;
    } else {
      // Hide the button
      backToTopButton.classList.add("hide");
      backToTopButton.classList.remove("show");
      backToTopButton.style.position = "fixed"; // Ensure it remains in place during hiding
    }
  };

  // Attach the scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Smooth scroll to top when the button is clicked
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});


//load More
document.getElementById('load-more').addEventListener("click", function () {
  const grid = document.querySelector('.product-grid');
  grid.classList.toggle('expanded');
  
  // Toggle button text
  if (grid.classList.contains('expanded')) {
      this.textContent = 'Show Less';
  } else {
      this.textContent = 'Load More';
  }
});

