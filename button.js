let running = false;
let interval;

const button = document.getElementById("priceButton");
const contactButtons = document.querySelectorAll(".contact-button");

button.addEventListener("click", () => {
    if (!running) {
        running = true;

        interval = setInterval(() => {
            // Current price
            let current = parseFloat(button.textContent.replace("$", ""));

            // Random change between 0.00 and 0.50
            let change = Math.random() * 0.5;

            // Randomly add or subtract
            let increase = Math.random() < 0.5;

            if (increase) {
                current += change;
                button.style.color = "green";
            } else {
                current = Math.max(0, current - change);
                button.style.color = "red";
            }

            // Show 2 decimals
            button.textContent = "$" + current.toFixed(2);

            // Return to normal color after 1 seconds
            setTimeout(() => {
                button.style.color = "#016a01";
            }, 500);
        }, 500);
    } else {
        running = false;
        clearInterval(interval);
    }
});
