import React from 'react'

const WeatherCard = ({ weather }) => {
  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`
  }

  const getWeatherDescription = (description) => {
    return description.charAt(0).toUpperCase() + description.slice(1)
  }

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{weather.name}, {weather.sys.country}</h2>
        <div className="weather-icon">
          <img 
            src={getWeatherIcon(weather.weather[0].icon)} 
            alt={weather.weather[0].description}
          />
        </div>
      </div>
      
      <div className="weather-main">
        <div className="temperature">
          <span className="temp-value">{Math.round(weather.main.temp)}°C</span>
          <span className="temp-feels">Känns som {Math.round(weather.main.feels_like)}°C</span>
        </div>
        
        <div className="weather-description">
          {getWeatherDescription(weather.weather[0].description)}
        </div>
      </div>
      
      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Fuktighet</span>
          <span className="detail-value">{weather.main.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Vind</span>
          <span className="detail-value">{weather.wind.speed} m/s</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Tryck</span>
          <span className="detail-value">{weather.main.pressure} hPa</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Sikt</span>
          <span className="detail-value">{weather.visibility / 1000} km</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
