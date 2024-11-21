// script.js
document.addEventListener('DOMContentLoaded', () => {
    const factDisplay = document.getElementById('fact-display');
    const getFactButton = document.getElementById('get-fact');

    // Function to fetch random fact from your Express server
    async function getRandomFact() {
        try {
            const response = await fetch('http://localhost:3000/facts/random');
            const data = await response.json();
            factDisplay.textContent = data.fact;
        } catch (error) {
            factDisplay.textContent = 'Failed to load fact. Please try again.';
            console.error('Error:', error);
        }
    }

    // Load initial fact
    getRandomFact();

    // Add click event listener to button
    getFactButton.addEventListener('click', getRandomFact);
});
