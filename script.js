document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Navbar Links
    document.querySelectorAll('.nav').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href').substring(1); // Get the section ID
            const targetElement = document.getElementById(targetId); // Get the section element
            const offset = 140; // Adjust for fixed logo + navbar height

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth' // Smooth scrolling
                });
            }
        });
    });

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
        { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    elements.forEach((el) => observer.observe(el));

    // Control Bootstrap Carousel Speed
    const carouselElement = document.querySelector('#carouselExampleAutoplaying'); // Use the correct carousel ID
    if (carouselElement) {
        const carousel = new bootstrap.Carousel(carouselElement, {
            interval: 4000, // Set speed to 4 seconds (4000ms)
            ride: 'carousel' // Auto-start the carousel
        });

        // Optional: Dynamically change the interval
        carouselElement.addEventListener('slid.bs.carousel', () => {
            console.log('Slide transitioned!');
            // Adjust the interval dynamically if needed
            carousel._config.interval = 4000; // Change to 4 seconds
        });
    }
});
// toggle
function toggleNav() {
    const navList = document.getElementById('nav-list');
    const toggler = document.querySelector('.toggler');

    // Toggle "show" class for visibility
    navList.classList.toggle('show');

    // Change toggle button text to X when active
    if (navList.classList.contains('show')) {
      toggler.innerHTML = '✖'; // Cross icon
    } else {
      toggler.innerHTML = '☰'; // Hamburger icon
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


