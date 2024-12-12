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
    const buttonOffset = 400; // Distance above the bottom of the page

    // Show or hide the button
    if (scrollPosition > 100) {
      backToTopButton.classList.add("show");
      backToTopButton.classList.remove("hide");
    } else {
      backToTopButton.classList.add("hide");
      backToTopButton.classList.remove("show");
    }

    // Adjust the button's position dynamically
    const distanceToBottom = pageHeight - (scrollPosition + viewportHeight);
    if (distanceToBottom <= buttonOffset) {
      // If near the end of the page, stop 200px above the bottom
      backToTopButton.style.position = "absolute";
      backToTopButton.style.bottom = `${buttonOffset}px`;
    } else {
      // Default behavior (fixed at the viewport bottom)
      backToTopButton.style.position = "fixed";
      backToTopButton.style.bottom = `10px`;
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
