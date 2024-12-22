// Smooth Scrolling for Navbar Links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1); // Extract the section ID
    const targetElement = document.getElementById(targetId);

    // Scroll to the target section
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
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

    if (
      scrollPosition > buttonVisibilityOffset &&
      distanceToBottom > hideButtonOffset
    ) {
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

// pro-category
function filterProducts1(category) {
  // Update active button
  document.querySelectorAll(".pro-categories-1 button").forEach((button) => {
    button.classList.remove("active");
  });
  event.target.classList.add("active");

  // Show/Hide products
  document.querySelectorAll(".product-card-1").forEach((product) => {
    if (category === "all-1" || product.dataset.category === category) {
      product.style.display = "flex";
    } else {
      product.style.display = "none";
    }
  });
}
function filterProducts2(category) {
  // Update active button
  document.querySelectorAll(".pro-categories-2 button").forEach((button) => {
    button.classList.remove("active");
  });
  event.target.classList.add("active");

  // Show/Hide products
  document.querySelectorAll(".product-card-2").forEach((product) => {
    if (category === "all-2" || product.dataset.category === category) {
      product.style.display = "flex";
    } else {
      product.style.display = "none";
    }
  });
}
function filterProducts3(category) {
  // Update active button
  document.querySelectorAll(".pro-categories-3 button").forEach((button) => {
    button.classList.remove("active");
  });
  event.target.classList.add("active");

  // Show/Hide products
  document.querySelectorAll(".product-card-3").forEach((product) => {
    if (category === "all-3" || product.dataset.category === category) {
      product.style.display = "flex";
    } else {
      product.style.display = "none";
    }
  });
}
function filterProducts4(category) {
  // Update active button
  document.querySelectorAll(".pro-categories-4 button").forEach((button) => {
    button.classList.remove("active");
  });
  event.target.classList.add("active");

  // Show/Hide products
  document.querySelectorAll(".product-card-4").forEach((product) => {
    if (category === "all-4" || product.dataset.category === category) {
      product.style.display = "flex";
    } else {
      product.style.display = "none";
    }
  });
}
function filterProducts5(category) {
  // Update active button
  document.querySelectorAll(".pro-categories-5 button").forEach((button) => {
    button.classList.remove("active");
  });
  event.target.classList.add("active");

  // Show/Hide products
  document.querySelectorAll(".product-card-5").forEach((product) => {
    if (category === "all-5" || product.dataset.category === category) {
      product.style.display = "flex";
    } else {
      product.style.display = "none";
    }
  });
}
function filterProducts6(category) {
  // Update active button
  document.querySelectorAll(".pro-categories-6 button").forEach((button) => {
    button.classList.remove("active");
  });
  event.target.classList.add("active");

  // Show/Hide products
  document.querySelectorAll(".product-card-6").forEach((product) => {
    if (category === "all-6" || product.dataset.category === category) {
      product.style.display = "flex";
    } else {
      product.style.display = "none";
    }
  });
}

//load More
document.getElementById("load-more-1").addEventListener("click", function () {
  const grid = document.querySelector(".product-grid-1");

  // Toggle the expanded class
  grid.classList.toggle("expanded");

  // Toggle button text
  this.textContent = grid.classList.contains("expanded")
    ? "Show Less"
    : "Load More";
});
document.getElementById("load-more-2").addEventListener("click", function () {
  const grid = document.querySelector(".product-grid-2");

  // Toggle the expanded class
  grid.classList.toggle("expanded");

  // Toggle button text
  this.textContent = grid.classList.contains("expanded")
    ? "Show Less"
    : "Load More";
});
document.getElementById("load-more-3").addEventListener("click", function () {
  const grid = document.querySelector(".product-grid-3");

  // Toggle the expanded class
  grid.classList.toggle("expanded");

  // Toggle button text
  this.textContent = grid.classList.contains("expanded")
    ? "Show Less"
    : "Load More";
});
document.getElementById("load-more-4").addEventListener("click", function () {
  const grid = document.querySelector(".product-grid-4");

  // Toggle the expanded class
  grid.classList.toggle("expanded");

  // Toggle button text
  this.textContent = grid.classList.contains("expanded")
    ? "Show Less"
    : "Load More";
});
document.getElementById("load-more-5").addEventListener("click", function () {
  const grid = document.querySelector(".product-grid-5");

  // Toggle the expanded class
  grid.classList.toggle("expanded");

  // Toggle button text
  this.textContent = grid.classList.contains("expanded")
    ? "Show Less"
    : "Load More";
});
document.getElementById("load-more-6").addEventListener("click", function () {
  const grid = document.querySelector(".product-grid-6");

  // Toggle the expanded class
  grid.classList.toggle("expanded");

  // Toggle button text
  this.textContent = grid.classList.contains("expanded")
    ? "Show Less"
    : "Load More";
});
