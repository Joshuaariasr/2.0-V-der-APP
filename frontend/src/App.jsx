import React, { useState, useEffect } from 'react'
import WeatherCard from './components/WeatherCard'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [city, setCity] = useState('Stockholm')

  // Använd vårt backend API istället för OpenWeatherMap direkt
  const API_URL = 'http://localhost:5001/api/weather'

  const fetchWeather = async (cityName) => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch(`${API_URL}/${cityName}`)
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Stad inte hittad')
      }
      
      const data = await response.json()
      setWeather(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather(city)
  }, [])

  const handleSearch = (searchCity) => {
    setCity(searchCity)
    fetchWeather(searchCity)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🌤️ Väder App</h1>
        <SearchBar onSearch={handleSearch} loading={loading} />
      </header>
      
      <main className="app-main">
        {loading && <div className="loading">Laddar väderdata...</div>}
        {error && <div className="error">❌ {error}</div>}
        {weather && !loading && <WeatherCard weather={weather} />}
      </main>
    </div>
  )
}

export default App
