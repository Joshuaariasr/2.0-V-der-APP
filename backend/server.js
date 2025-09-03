const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Tillåt frontend att anropa API:et
  credentials: true
}));
app.use(express.json());

// API-nyckel för OpenWeatherMap
const API_KEY = process.env.OPENWEATHER_API_KEY || 'YOUR_API_KEY_HERE';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Väder API endpoint
app.get('/api/weather/:city', async (req, res) => {
  try {
    const { city } = req.params;
    
    if (!API_KEY || API_KEY === 'YOUR_API_KEY_HERE') {
      return res.status(500).json({
        error: 'API-nyckel saknas. Lägg till OPENWEATHER_API_KEY i .env-filen.'
      });
    }

    const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=sv`);
    
    res.json(response.data);
  } catch (error) {
    console.error('Väder API fel:', error.response?.data || error.message);
    
    if (error.response?.status === 404) {
      res.status(404).json({ error: 'Stad inte hittad' });
    } else if (error.response?.status === 401) {
      res.status(401).json({ error: 'Ogiltig API-nyckel' });
    } else {
      res.status(500).json({ error: 'Server fel vid hämtning av väderdata' });
    }
  }
});

// Hälsa endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    message: 'Väder API server körs!', 
    timestamp: new Date().toISOString(),
    status: 'OK'
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Väder App Backend API',
    endpoints: {
      health: '/api/health',
      weather: '/api/weather/:city'
    }
  });
});

app.listen(PORT, () => {
  console.log(`🌤️  Väder API server körs på port ${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🌍 Väder API: http://localhost:${PORT}/api/weather/Stockholm`);
  console.log(`🔗 CORS aktiverat för: http://localhost:3000`);
});
