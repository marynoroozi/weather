import { render, screen } from '@testing-library/react';
import WeatherDetails from '.';

describe('WeatherDetails', () => {
  test('renders weather details correctly', () => {
    // Mock weather data with all necessary properties
    const weatherData = {
      coord: { lon: 139, lat: 35 },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'Clear sky',
          icon: '01d'
        }
      ],
      main: {
        temp: 293.25,
        feels_like: 25,
        temp_min: 289.82,
        temp_max: 295.37,
        pressure: 1013,
        humidity: 70
      },
      visibility: 10000,
      wind: {
        speed: 5,
        deg: 80,
        gust: 10
      },
      clouds: { all: 1 },
      dt: 1621425600,
      sys: {
        type: 2,
        id: 2019346,
        country: 'JP',
        sunrise: 1621425600,
        sunset: 1621479600
      },
      timezone: 32400,
      name: 'Shuzenji',
      cod: 200
    };

    // Render the WeatherDetails component with mock data
    render(<WeatherDetails weatherData={weatherData as any} />);

    expect(screen.getByText('SUNRISE')).toBeInTheDocument();
    expect(screen.getByText('SUNSET')).toBeInTheDocument();
    expect(screen.getByText('Clear sky')).toBeInTheDocument();
    expect(screen.getByText('70%')).toBeInTheDocument();
    expect(screen.getByText('5 km/h')).toBeInTheDocument();
    expect(screen.getByText('1013 hPa')).toBeInTheDocument();
    expect(screen.getByText('25 °')).toBeInTheDocument();
    expect(screen.getByText('10 km')).toBeInTheDocument();
  });
});
