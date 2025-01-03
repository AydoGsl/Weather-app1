// Weather Data Object
const weather = {
    temperature: 20, // Default temperature in Celsius
    condition: "Clear", // Default weather condition
    cloudiness: 50, // Default cloudiness percentage
};

// Function to generate random weather data
function generateRandomWeather() {
    weather.temperature = Math.floor(Math.random() * 51) - 10; // Random temperature between -10 and 40
    const conditions = ["Clear", "Rain", "Snow"];
    weather.condition = conditions[Math.floor(Math.random() * conditions.length)]; // Random condition
    weather.cloudiness = Math.floor(Math.random() * 101); // Random cloudiness percentage (0 to 100)

    updateWeatherDisplay();
}

// Function to update the displayed weather data dynamically
function updateWeatherDisplay() {
    const temperatureElement = document.getElementById("temperature");
    const conditionElement = document.getElementById("condition");
    const cloudinessElement = document.getElementById("cloudiness");
    const warningElement = document.getElementById("warning");
    const bodyElement = document.body;

    // Update the content of the weather elements
    temperatureElement.textContent = `Temperature: ${weather.temperature}°C`;
    conditionElement.textContent = `Condition: ${weather.condition}`;
    cloudinessElement.textContent = `Cloudiness: ${weather.cloudiness}%`;

    // Display warning message for extreme weather (Snow and temperature < -10)
    if (weather.condition === "Snow" && weather.temperature < -10) {
        warningElement.textContent = "Do not go outside!";
        warningElement.style.visibility = "visible";  
        warningElement.style.opacity = 1;  
    } else {
        warningElement.textContent = "";
        warningElement.style.visibility = "hidden"; 
        warningElement.style.opacity = 0; 
    }

    // Change background based on the weather condition
    if (weather.condition === "Clear") {
        bodyElement.style.background = "linear-gradient(to bottom, #87CEEB, #FFFACD)"; // Sunny gradient
    } else if (weather.condition === "Rain") {
        bodyElement.style.background = "linear-gradient(to bottom, #2C3E50, #4CA1AF)"; // Rainy gradient
    } else if (weather.condition === "Snow") {
        bodyElement.style.background = "linear-gradient(to bottom, #E0E0E0, #FFFFFF)"; // Snow gradient
    }
}

// Run this after the page content is loaded
document.addEventListener("DOMContentLoaded", function() {
    updateWeatherDisplay();  // Display initial weather data
    setInterval(generateRandomWeather, 180000);  // Update weather data every 3 minutes
});


//test