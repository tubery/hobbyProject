// Selectors
const dateItem = document.querySelector("#current-date");
const timeItem = document.querySelector("#current-time");

// Function to update date and time
function updateDateTime() {
	dateItem.textContent = new Date().toLocaleDateString();
	timeItem.textContent = new Date().toLocaleTimeString();
}
// Initial call to show on page load instantly
updateDateTime();

// Update time every second
setInterval(updateDateTime, 1000);
