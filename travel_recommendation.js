/* Nav Search Bar */
function searchFunction() {
  const value = document.getElementById('searchInput').value;
    // Example: redirect based on search value
  if (value === "about us") {
    window.location.href = "aboutus.html";
  } else if (value === "contact" || value === "contact us") {
    window.location.href = "contactus.html";
  } else if (value === "home") {
    window.location.href = "home.html";
  } else {
    alert('No results found for: ' + value);
  }
}

function resetSearchInput() {
  document.getElementById('searchInput').value = '';
}
// In travel_recommendation.js
function searchFunction() {
  const query = document.getElementById('searchInput').value.trim();
  if (query) {
    window.location.href = `recommendations.html?search=${encodeURIComponent(query)}`;
  }
}
// Example recommendations data
const recommendations = [
  { name: "Paris", desc: "City of lights and romance." },
  { name: "Kyoto", desc: "Temples and cherry blossoms." },
  { name: "California", desc: "Sunny beaches and vibrant cities." },
  { name: "Iceland", desc: "Land of fire and ice." }
];

// Get search query from URL
const params = new URLSearchParams(window.location.search);
const search = params.get('search')?.toLowerCase() || "";

// Filter recommendations
const filtered = recommendations.filter(r =>
  r.name.toLowerCase().includes(search) ||
  r.desc.toLowerCase().includes(search)
);

// Display results
const list = document.getElementById('recommendations-list');
if (filtered.length) {
  list.innerHTML = filtered.map(r =>
    `<div class="recommendation-card">
      <h2>${r.name}</h2>
      <p>${r.desc}</p>
    </div>`
  ).join('');
} else {
  list.innerHTML = "<p>No recommendations found.</p>";
}