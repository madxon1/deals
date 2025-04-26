const listItems = document.querySelectorAll('.list');
function activateLink() {
  listItems.forEach(item => item.classList.remove('active'));
  this.classList.add('active');
}
listItems.forEach(item => item.addEventListener('click', activateLink));



document.addEventListener("DOMContentLoaded", () => {
  

  // Intersection Observer for Animations
  const elements = document.querySelectorAll(".animate");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 } // Trigger when 50% of the element is visible
  );

  elements.forEach((el) => observer.observe(el));

  // Control Bootstrap Carousel Speed
  const carouselElement = document.querySelector("#carouselExampleAutoplaying"); // Use the correct carousel ID
  if (carouselElement) {
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 3000, // Set speed to 4 seconds (4000ms)
      ride: "carousel", // Auto-start the carousel
    });

    // Optional: Dynamically change the interval
    carouselElement.addEventListener("slid.bs.carousel", () => {
      console.log("Slide transitioned!");
      // Adjust the interval dynamically if needed
      carousel._config.interval = 3000; // Change to 4 seconds
    });
  }
});

// toggle
function toggleNav() {
  const navList = document.getElementById("nav-list");
  const toggler = document.querySelector(".toggler");

  // Toggle "show" class for visibility
  navList.classList.toggle("show");

  // Change toggle button text to X when active
  if (navList.classList.contains("show")) {
    toggler.innerHTML = "✖"; // Cross icon
  } else {
    toggler.innerHTML = "☰"; // Hamburger icon
  }
}

//carosel
document.addEventListener("DOMContentLoaded", () => {
  const carouselInner = document.querySelector(".carousel-inner");
  const items = Array.from(carouselInner.children); // Convert to an array

  // Shuffle function (Fisher-Yates Algorithm)
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Shuffle the carousel items
  shuffle(items);

  // Clear existing elements in the carousel-inner
  carouselInner.innerHTML = "";

  // Re-add shuffled elements and set the first one as active
  items.forEach((item, index) => {
    if (index === 0) {
      item.classList.add("active"); // Set the first item to active
    } else {
      item.classList.remove("active"); // Ensure others are not active
    }
    carouselInner.appendChild(item);
  });
});

//location change
document.addEventListener("DOMContentLoaded", function () {
  let locationSelect = document.getElementById("locationSelect");

  // Load saved location from local storage
  let savedLocation = localStorage.getItem("userLocation");
  
  if (savedLocation) {
    locationSelect.value = savedLocation;
  }
});

function redirectToLocation() {
  let select = document.getElementById("locationSelect");
  let selectedValue = select.value;

  // Save location in local storage
  localStorage.setItem("userLocation", selectedValue);

  // Redirect to selected location page
  window.location.href = selectedValue;
}

//dynamic year
document.getElementById("year").textContent = new Date().getFullYear();
