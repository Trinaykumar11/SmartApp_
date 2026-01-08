import { useState, useEffect } from "react";

function WeatherApp() {
  const API_KEY = "307ac5890f8d3873c48d32a68e8a2924";

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const [unit, setUnit] = useState("metric"); // metric = °C, imperial = °F
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastCity, setLastCity] = useState("");

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // 🔍 SEARCH CITY (ANY CITY)
  const searchCity = async (cityName) => {
    const query = (cityName || city).trim();
    if (!query) {
      setError("Please enter a city name");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setLastCity(query);

      // STEP 1: CITY → LAT/LON (Geocoding API)
      const geoRes = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
          query
        )}&limit=1&appid=${API_KEY}`
      );

      const geoData = await geoRes.json();

      if (!Array.isArray(geoData) || geoData.length === 0) {
        throw new Error("City not found");
      }

      const { lat, lon, name, country } = geoData[0];

      // STEP 2: CURRENT WEATHER
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`
      );

      const weatherData = await weatherRes.json();
      if (weatherData.cod !== 200) {
        throw new Error(weatherData.message);
      }

      setWeather({
        ...weatherData,
        displayName: `${name}, ${country}`,
      });

      // STEP 3: 5-DAY FORECAST
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`
      );

      const forecastData = await forecastRes.json();
      const daily = forecastData.list.filter((_, i) => i % 8 === 0);
      setForecast(daily);
    } catch (err) {
      setError(err.message);
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  const toggleUnit = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(newUnit);
    if (lastCity) {
      setTimeout(() => searchCity(lastCity), 0);
    }
  };

  const addFavorite = () => {
    if (weather && !favorites.includes(weather.displayName)) {
      setFavorites([...favorites, weather.displayName]);
    }
  };

  /* ======================= UI ======================= */

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #60a5fa, #6366f1)",
        padding: "30px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "#ffffff",
          borderRadius: "16px",
          padding: "25px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          🌦️ Weather App
        </h2>

        {/* SEARCH */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter any city name"
            style={{
              padding: "12px",
              width: "240px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />

          <button
            onClick={() => searchCity()}
            style={{
              padding: "12px 18px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#2563eb",
              color: "#fff",
              fontWeight: "500",
            }}
          >
            Search
          </button>

          <button
            onClick={toggleUnit}
            style={{
              padding: "12px 18px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#111827",
              color: "#fff",
              fontWeight: "500",
            }}
          >
            °{unit === "metric" ? "F" : "C"}
          </button>
        </div>

        {/* FAVORITES */}
        {favorites.length > 0 && (
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <strong>⭐ Favorites:</strong>{" "}
            {favorites.map((fav) => (
              <span
                key={fav}
                onClick={() => searchCity(fav.split(",")[0])}
                style={{
                  cursor: "pointer",
                  color: "#2563eb",
                  marginRight: "10px",
                  fontWeight: "500",
                }}
              >
                {fav}
              </span>
            ))}
          </div>
        )}

        {loading && (
          <p style={{ textAlign: "center", fontWeight: "500" }}>
            Loading weather...
          </p>
        )}

        {error && (
          <p style={{ textAlign: "center", color: "red" }}>{error}</p>
        )}

        {/* CURRENT WEATHER */}
        {weather && (
          <div
            style={{
              background: "#f9fafb",
              padding: "20px",
              borderRadius: "14px",
              marginBottom: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <h3>{weather.displayName}</h3>
            <p style={{ fontSize: "22px", fontWeight: "600" }}>
              🌡️ {weather.main.temp}°
            </p>
            <p style={{ textTransform: "capitalize" }}>
              ☁️ {weather.weather[0].description}
            </p>
            <p>💧 Humidity: {weather.main.humidity}%</p>

            <button
              onClick={addFavorite}
              style={{
                marginTop: "10px",
                padding: "10px 16px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                backgroundColor: "#22c55e",
                color: "#fff",
                fontWeight: "500",
              }}
            >
              Add to Favorites
            </button>
          </div>
        )}

        {/* FORECAST */}
        {forecast.length > 0 && (
          <div>
            <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
              5-Day Forecast
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "12px",
              }}
            >
              {forecast.map((day, i) => (
                <div
                  key={i}
                  style={{
                    background: "#eef2ff",
                    padding: "14px",
                    borderRadius: "12px",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontSize: "13px" }}>
                    {new Date(day.dt_txt).toDateString()}
                  </p>
                  <p style={{ fontWeight: "600" }}>
                    {day.main.temp}°
                  </p>
                  <p>{day.weather[0].main}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;
