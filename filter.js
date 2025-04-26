const filterToggle = document.getElementById('filter-toggle');
const filterSection = document.getElementById('filter-section');
const applyFiltersBtn = document.getElementById('apply-filters');
const clearFiltersBtn = document.getElementById('clear-filters');
const productList = document.getElementById('product-list');
const searchBar = document.getElementById('search-bar');
const suggestionList = document.getElementById('suggestion-list');
const clearIcon = document.getElementById('clear-icon');
const genreCount = document.getElementById('genre-count');
const pageNumbersContainer = document.getElementById('pageNumbers'); // Get the pagination container

const filters = {
    genre: [],
    price: [],
    duration: [],
    skills: []
};

let allProducts = []; // Store ALL product cards
let filteredProducts = []; // Store currently FILTERED product cards
let visibleProducts = []; // Store currently VISIBLE product cards (after search and filter)
let currentPage = 1;
const productsPerPage = 12;


history.scrollRestoration = "manual"; // Prevents browser from restoring scroll position
window.onload = function () {
    window.scrollTo(0, 0);
};

// Initialize allProducts
function initializeProducts() {
    allProducts = Array.from(document.querySelectorAll('.product-card'));
    applyFiltersAndSearch();
    goToPage(1, true); // Load page 1 without scrolling
}


filterToggle.addEventListener('click', () => {
    filterSection.classList.toggle('hidden');
    filterToggle.classList.toggle('active');
});

applyFiltersBtn.addEventListener('click', () => {
    applyFilters(); // Apply filters only
    filterSection.classList.add('hidden');
    filterToggle.classList.remove('active');
});



document.querySelectorAll('.filter-btn[data-filter="genre"]').forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.dataset.value;
        if (filters.genre.includes(value)) {
            filters.genre = filters.genre.filter(v => v !== value);
            btn.classList.remove('bg-blue-800', 'text-white');
        } else {
            filters.genre.push(value);
            btn.classList.add('bg-blue-800', 'text-white');
        }
        updateGenreCount();
        applyFiltersAndSearch();
    });
});

function updateGenreCount() {
    const count = filters.genre.length;
    genreCount.textContent = `(${count})`;
}

clearFiltersBtn.addEventListener('click', () => {
    Object.keys(filters).forEach(key => filters[key] = []);
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('bg-blue-500', 'text-white', 'bg-blue-800', 'text-white'));
    updateGenreCount();
    applyFiltersAndSearch();
});

applyFiltersBtn.addEventListener('click', () => {
    applyFiltersAndSearch();
    filterSection.classList.add('hidden'); // Hide filter section
    filterToggle.classList.remove('active'); // Reset toggle state
});

// Search bar event listeners (for automatic search)
searchBar.addEventListener('input', () => {
    window.scrollTo({ top: 0, behavior: 'instant' }); // Stop auto-scrolling when user types
    const query = searchBar.value.toLowerCase();
    updateSuggestions(query);

    if (query.trim() !== '') {
        suggestionList.classList.remove('hidden');
        clearIcon.classList.remove('hidden');
    } else {
        suggestionList.classList.add('hidden');
        clearIcon.classList.add('hidden');
    }

    applyFiltersAndSearch();
});

searchBar.addEventListener('focus', () => {
    const query = searchBar.value.toLowerCase();
    updateSuggestions(query);

    if (query.trim() !== '') {
        suggestionList.classList.remove('hidden');
        clearIcon.classList.remove('hidden');
    } else {
        suggestionList.classList.add('hidden');
        clearIcon.classList.add('hidden');
    }
});

searchBar.addEventListener('blur', () => {
    setTimeout(() => {
        suggestionList.classList.add('hidden');
    }, 200);
});

suggestionList.addEventListener('mouseenter', () => {
    const query = searchBar.value.toLowerCase();
    updateSuggestions(query);

    if (query.trim() !== '') {
        suggestionList.classList.remove('hidden');
        clearIcon.classList.remove('hidden');
    } else {
        suggestionList.classList.add('hidden');
        clearIcon.classList.add('hidden');
    }
});

suggestionList.addEventListener('mouseleave', () => {
    suggestionList.classList.add('hidden');
});


clearIcon.addEventListener('click', () => {
    searchBar.value = '';
    suggestionList.classList.add('hidden');
    clearIcon.classList.add('hidden');
    applySearch(); // Clear search and apply (show all products)
});

function applyFiltersAndSearch() {
    const query = searchBar.value.toLowerCase();

    filteredProducts = allProducts.filter(card => {
        let genreMatch = filters.genre.length === 0;
        if (filters.genre.length > 0) {
            const cardGenres = card.dataset.genre.split(',');
            genreMatch = filters.genre.some(genre => cardGenres.includes(genre));
        }
        return genreMatch;
    });

    visibleProducts = filteredProducts.filter(card => {
        const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
        return title.includes(query);
    });

    allProducts.forEach(card => card.classList.add('hidden'));
    visibleProducts.forEach(card => card.classList.remove('hidden'));

    document.getElementById('no-results').style.display = visibleProducts.length === 0 ? 'block' : 'none';

    renderPagination();
    goToPage(1);
}

function updateSuggestions(query) {
    suggestionList.innerHTML = '';
    if (query.trim() === '') {
        suggestionList.classList.add('hidden');
        clearIcon.classList.add('hidden');
        return;
    }

    const matches = visibleProducts.filter(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        return title.includes(query);
    });

    matches.slice(0, 4).forEach(card => {
        const title = card.querySelector('h3').textContent;
        const li = document.createElement('li');
        li.textContent = title;
        li.className = 'p-2 cursor-pointer';
        li.addEventListener('click', () => {
            searchBar.value = title;
            suggestionList.classList.add('hidden');
            applyFiltersAndSearch();
            searchBar.blur(); // Remove focus from search bar after suggestion click
        });
        suggestionList.appendChild(li);
    });

    suggestionList.classList.remove('hidden');
    clearIcon.classList.remove('hidden');
}


function renderPagination() {
    const totalPages = Math.ceil(visibleProducts.length / productsPerPage); // Use visibleProducts
    pageNumbersContainer.innerHTML = '';

    if (totalPages > 1) {
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('div');
            pageButton.classList.add('page-number');
            pageButton.textContent = i;
            pageButton.addEventListener('click', () => goToPage(i));
            if (i === currentPage) {
                pageButton.classList.add('active');
            }
            pageNumbersContainer.appendChild(pageButton);
        }
        pageNumbersContainer.style.display = 'flex'; // Show pagination
        document.getElementById('prevBtn').disabled = currentPage === 1;
        document.getElementById('nextBtn').disabled = currentPage === totalPages;
    } else {
        pageNumbersContainer.style.display = 'none'; // Hide pagination
    }
    autoScrollToActivePage();
}

function goToPage(page, preventScroll = false) {
    currentPage = page;
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;

    visibleProducts.forEach(card => card.classList.add('hidden')); // Hide all first
    visibleProducts.slice(start, end).forEach(card => card.classList.remove('hidden')); // Show only the selected page

    renderPagination();

    // Prevent auto-scrolling when calling goToPage during initialization
    if (!preventScroll) {
        window.scrollTo({ top: 165, behavior: 'smooth' });
    }
}


function nextPage() {
    if (currentPage < Math.ceil(visibleProducts.length / productsPerPage)) {
        currentPage++;
        goToPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        goToPage(currentPage);
    }
}

function autoScrollToActivePage() {
    const activeButton = document.querySelector('.page-number.active');
    if (activeButton) {
        activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
}

document.getElementById('nextBtn').onclick = nextPage;
document.getElementById('prevBtn').onclick = prevPage;


initializeProducts(); // Call at the end to set up initial state

function startAutoPagination() {
    clearInterval(autoPaginationInterval);
    autoPaginationInterval = setInterval(nextPage, 60000);
  }
  
// Initial render
goToPage(currentPage);

document.getElementById('nextBtn').onclick = () => {
  nextPage();
};

document.getElementById('prevBtn').onclick = () => {
  prevPage();
};
