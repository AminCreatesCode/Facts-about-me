// script.js
document.addEventListener('DOMContentLoaded', () => {
    const factDisplay = document.getElementById('fact-display');
    const getFactButton = document.getElementById('get-fact');

    const facts = [
        "I am 20 years old and passionate about exploring the natural world.",
        "I enjoy spending time in nature and observing wildlife in their habitat.",
        "My favorite outdoor activities include hiking and bird watching.",
        "I actively participate in local environmental conservation projects.",
        "I dream of visiting all national parks to experience diverse ecosystems."
    ];

    // Function to get random fact from the facts array
    function getRandomFact() {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        factDisplay.textContent = randomFact;
    }

    // Load initial fact
    getRandomFact();

    // Add click event listener to button
    getFactButton.addEventListener('click', getRandomFact);
});
