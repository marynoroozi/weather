# React Weather Application

This is a React-based weather application that provides current weather data and 5-day/3-hour weather forecast using the OpenWeatherMap API. The app is built with TypeScript and includes models for different API responses, services for API calls, and a "Not Found" page for handling unknown routes. It also has unit tests written with Jest.

# Features

Current Weather Data: Get real-time weather information based on geographic coordinates.
5-day/3-hour Forecast: View weather forecasts for the next 5 days with data updated every 3 hours.
Responsive Design: Works well on both desktop and mobile devices.
Error Handling: Includes a "Not Found" page for unknown routes.
Unit Testing: Includes tests for components and services using Jest.
Technologies Used
React
TypeScript
OpenWeatherMap API
Axios for API calls
Jest for testing
React Router for routing
Getting Started
Follow these instructions to set up and run the project locally.

# Prerequisites
Node.js (version 14.x or higher)
npm (version 6.x or higher) or yarn (version 1.x or higher)
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/marynoroozi/weather-app.git
cd weather-app
Install dependencies:
bash
Copy code
npm install
# or
yarn install
Create a .env file in the root directory and add your OpenWeatherMap API key:
makefile
Copy code
REACT_APP_API_KEY=your_openweathermap_api_key
Running the Application
Start the development server:

bash
Copy code
npm start
# or
yarn start
Open your browser and navigate to http://localhost:3000.

Running Tests
Run the unit tests using Jest:

bash
Copy code
npm test
# or
yarn test
Project Structure
java
Copy code
weather-app/
├── public/
├── src/
│   ├── components/
│   │   ├── CurrentWeather.tsx
│   │   ├── Forecast.tsx
│   │   └── NotFound.tsx
│   ├── models/
│   │   ├── CurrentWeather.ts
│   │   └── Forecast.ts
│   ├── services/
│   │   └── weatherService.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── App.test.tsx
│   └── setupTests.ts
├── .env
├── package.json
├── tsconfig.json
└── README.md
API Usage
Current Weather Data
To fetch current weather data:

typescript
Copy code
import axios from 'axios';

const getCurrentWeather = async (lat: number, lon: number) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
  );
  return response.data;
};
5-day/3-hour Forecast Data
To fetch 5-day/3-hour forecast data:

typescript
Copy code
import axios from 'axios';

const getForecast = async (lat: number, lon: number) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
  );
  return response.data;
};

# Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.


# Acknowledgements
OpenWeatherMap API for providing weather data.