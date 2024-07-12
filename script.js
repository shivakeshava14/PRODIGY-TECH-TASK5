document.getElementById('locationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let location = document.getElementById('locationInput').value;

    // Replace 'YOUR_API_KEY' with your actual API key from the weather service provider
    let apiKey = 'YOUR_API_KEY';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Update the DOM with fetched data
            let weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Description: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
            let weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again.</p>';
        });
});
