const cityDatabase = {
    "Mumbai": { lat: 19.0759, lon: 72.8777 },
    "Delhi": { lat: 28.7041, lon: 77.1025 },
    "Bangalore": { lat: 12.9716, lon: 77.5946 },
    "Hyderabad": { lat: 17.3850, lon: 78.4867 },
    "Chennai": { lat: 13.0827, lon: 80.2707 },
    "Kolkata": { lat: 22.5726, lon: 88.3639 },
    "Pune": { lat: 18.5204, lon: 73.8567 },
    "Ahmedabad": { lat: 23.0225, lon: 72.5714 },
    "Surat": { lat: 21.1702, lon: 72.8311 },
    "Jaipur": { lat: 26.9227, lon: 75.7789 },
    "Lucknow": { lat: 26.8467, lon: 80.9462 },
    "Kanpur": { lat: 26.4499, lon: 80.3319 },
    "Nagpur": { lat: 21.1458, lon: 79.0882 },
    "Indore": { lat: 22.7196, lon: 75.8573 },
    "Bhopal": { lat: 23.2599, lon: 77.4126 },
    "Patna": { lat: 25.5941, lon: 85.1376 },
    "Ranchi": { lat: 23.3478, lon: 85.3339 },
    "Bhubaneswar": { lat: 20.2961, lon: 85.8245 },
    "Visakhapatnam": { lat: 17.6868, lon: 83.2185 },
    "Thiruvananthapuram": { lat: 8.5241, lon: 76.9366 },
    "Coimbatore": { lat: 11.0168, lon: 76.9558 },
    "Madurai": { lat: 9.9252, lon: 78.1198 },
    "Tiruchirappalli": { lat: 10.8056, lon: 78.6856 },
    "Salem": { lat: 11.6733, lon: 78.1467 },
    "Warangal": { lat: 18.0119, lon: 79.5808 },
    "Vijayawada": { lat: 16.5067, lon: 80.6483 },
    "Guntur": { lat: 16.2957, lon: 80.4427 },
    "Nellore": { lat: 14.4333, lon: 79.9833 },
    "Kakinada": { lat: 16.9333, lon: 82.2167 },
    "Rajahmundry": { lat: 16.9833, lon: 81.7833 },
    "Vizianagaram": { lat: 18.1167, lon: 83.4167 },
    "Srikakulam": { lat: 18.2833, lon: 83.9333 },
  };
  
  function getWeather() {
    const cityInput = document.getElementById("city").value;
    const cityData = cityDatabase[cityInput];
    if (cityData) {
      const lat = cityData.lat;
      const lon = cityData.lon;
      getWeatherData(lat, lon);
    } else {
      alert("City not found in database");
    }
  }
  
  function getWeatherData(lat, lon) {
    const apiKey = "f58c4d1b83a98e0434315255a08a5ed6";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherResult = document.getElementById("weather-result");
        weatherResult.innerHTML = `
          <p>City: ${data.name}</p>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
      })
      .catch(error => console.error("Error:", error));
  }
  