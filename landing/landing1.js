//timer
const startTime = new Date("2026-08-14T12:00:00Z");
const endTime = new Date("2026-08-17T12:00:00Z");

function updateCountdown() {
	const now = new Date();
	if (now <= endTime) {
		const diff = startTime - now;

		const days = Math.floor(diff / (1000 * 60 * 60 * 24));
		const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((diff % (1000 * 60)) / 1000);
		document.getElementById("days").textContent = String(days).padStart(2, "0");
		document.getElementById("hours").textContent = String(hours).padStart(
			2,
			"0",
		);
		document.getElementById("minutes").textContent = String(minutes).padStart(
			2,
			"0",
		);
		document.getElementById("seconds").textContent = String(seconds).padStart(
			2,
			"0",
		);
	}
}

updateCountdown();
setInterval(updateCountdown, 1000);
