# 🌤️ Väder App

En modern, responsiv väderapplikation byggd med React och Express.js som visar aktuell väderdata för städer över hela världen.

## 📱 Funktioner

- **Sök väderdata** för alla städer världen över
- **Responsiv design** som fungerar på mobiler, surfplattor och datorer
- **Virtuellt tangentbord** för mobila enheter
- **Realtidsväderdata** från OpenWeatherMap API
- **Svenska språkstöd** för väderbeskrivningar
- **Säkerhetsförbättringar** med inputvalidering och rate limiting
- **Omfattande testfall** för alla funktioner

## 🛠️ Teknisk Stack

### Frontend
- **React 18** - Moderna React hooks och funktionella komponenter
- **Vite** - Snabb utvecklingsserver och byggverktyg
- **CSS3** - Responsiv design med Flexbox och Grid
- **JavaScript ES6+** - Modern JavaScript med async/await

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Axios** - HTTP client för API-anrop
- **CORS** - Cross-Origin Resource Sharing
- **Helmet** - Säkerhetsheaders
- **Rate Limiting** - Skydd mot överbelastning

### Externa Tjänster
- **OpenWeatherMap API** - Väderdata

## 📋 Förutsättningar

Innan du börjar, se till att du har följande installerat:

- **Node.js** (version 16 eller senare)
- **npm** (kommer med Node.js)
- **Git** (för att klona projektet)

## 🚀 Installation och Start

### 1. Klona Projektet

```bash
git clone https://github.com/Joshuaariasr/2.0-V-der-APP.git
cd 2.0-V-der-APP
```

### 2. Installera Dependencies

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd ../frontend
npm install
```

### 3. Konfigurera API-nyckel

1. Kopiera denna API-nycklen : 82961decf44d98f44abb4984646b3890 
2. Skapa en `.env` fil i `backend/` mappen:

```bash
cd backend
touch .env
```

4. Lägg till din API-nyckel i `.env` filen:

```env
OPENWEATHER_API_KEY= och klistra in den istället för - din_api_nyckel_här
```

### 4. Starta Applikationen

#### Starta Backend (Terminal 1)
```bash
cd backend
npm run dev
```

Backend-servern kommer att starta på `http://localhost:5001`

#### Starta Frontend (Terminal 2)
```bash
cd frontend
npm run dev
```

Frontend-applikationen kommer att starta på `http://localhost:3001` (eller 3000 om 3001 är upptagen)

### 5. Öppna Applikationen

Öppna din webbläsare och gå till:
- **Frontend**: `http://localhost:3001`
- **Backend API**: `http://localhost:5001`

## �� Responsiv Design

Applikationen är fullt responsiv och optimerad för alla enheter:

### 📱 Mobiler
- **Virtuellt tangentbord** för enkel inmatning
- **Touch-vänlig design** med stora knappar
- **Optimerad layout** för små skärmar
- **Swipe-vänlig navigation**

### 📱 Surfplattor (iPad)
- **Hybrid-layout** som kombinerar mobil och desktop
- **Större väderkort** för bättre läsbarhet
- **Optimerad för både porträtt och landskap**

### 💻 Datorer
- **Fullständig tangentbordsstöd**
- **Hover-effekter** och animationer
- **Optimerad för stora skärmar**
- **Snabb navigering med tangentbord**

## 🎯 Användning

### Sök Väderdata
1. **Skriv stadens namn** i sökfältet
2. **Tryck Enter** eller klicka på "Sök"
3. **Vänta** medan data laddas
4. **Se väderinformationen** inklusive:
   - Aktuell temperatur
   - Känns som temperatur
   - Väderbeskrivning
   - Luftfuktighet
   - Vindhastighet
   - Lufttryck
   - Sikt

### Mobila Enheter
- **Virtuellt tangentbord** visas automatiskt vid fokus
- **Klicka på "Visa tangentbord"** för att öppna det manuellt
- **Använd backspace** för att ta bort tecken
- **Mellanslag** för att lägga till mellanslag

## 🔧 Utveckling

### Projektstruktur
2.0-V-der-APP/
├── backend/ # Express.js server
│ ├── server.js # Huvudserverfil
│ ├── package.json # Backend dependencies
│ └── .env # Miljövariabler
├── frontend/ # React applikation
│ ├── src/
│ │ ├── components/ # React komponenter
│ │ ├── App.jsx # Huvudkomponent
│ │ └── main.jsx # Applikationsstart
│ ├── package.json # Frontend dependencies
│ └── vite.config.js # Vite konfiguration
└── README.md # Denna fil

### Tillgängliga Skript

#### Backend
```bash
npm start          # Starta produktionsserver
npm run dev        # Starta utvecklingsserver med nodemon
npm test           # Kör tester
npm run test:watch # Kör tester i watch-läge
```

#### Frontend
```bash
npm run dev        # Starta utvecklingsserver
npm run build      # Bygg för produktion
npm run preview    # Förhandsvisa produktionsbygg
npm test           # Kör tester
```

## 🧪 Testning

Projektet innehåller omfattande testfall:

### Backend-tester
- **API endpoint-tester**
- **Inputvalidering**
- **Säkerhetstester**
- **Felhantering**

### Frontend-tester
- **Komponenttester**
- **Integrationstester**
- **Användarinteraktionstester**

Kör alla tester:
```bash
# Backend
cd backend && npm test

# Frontend
cd frontend && npm test
```

## 🔒 Säkerhet

Applikationen inkluderar flera säkerhetsåtgärder:

- **Inputvalidering** - Sanering av användarinput
- **Rate Limiting** - Begränsning av API-anrop
- **CORS-konfiguration** - Kontrollerad åtkomst
- **Säkerhetsheaders** - Skydd mot vanliga attacker
- **Felhantering** - Säker hantering av fel

## �� API Endpoints

### Backend API
- `GET /` - API-information
- `GET /api/health` - Hälsokontroll
- `GET /api/weather/:city` - Väderdata för specifik stad

### Exempel API-anrop
```bash
# Hälsokontroll
curl http://localhost:5001/api/health

# Väderdata för Stockholm
curl http://localhost:5001/api/weather/Stockholm
```

## 🐛 Felsökning

### Vanliga Problem

#### Backend startar inte
- Kontrollera att port 5001 inte är upptagen
- Verifiera att API-nyckeln är korrekt i `.env` filen
- Kontrollera att alla dependencies är installerade

#### Frontend startar inte
- Kontrollera att port 3000/3001 inte är upptagen
- Verifiera att alla dependencies är installerade
- Kontrollera att backend körs

#### API-fel
- Kontrollera att OpenWeatherMap API-nyckeln är giltig
- Verifiera att stadsnamnet är korrekt stavat
- Kontrollera internetanslutning

## 📄 Licens

Detta projekt är skapat för utbildningssyfte.

## 👨‍�� Utvecklare

**Joshua Arias** - Jensen Developer 

## �� Support

Om du har frågor eller problem:
1. Kontrollera denna README eller Kontakta Mig 
---

**Tack för att du använder Väder App! ��️**
