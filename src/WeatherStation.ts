import CurrentConditionsDisplay from './CurrentConditionsDisplay';
import ForecastDisplay from './ForecastDisplay';
import HeatIndexDisplay from './HeatIndexDisplay';
import StatisticsDisplay from './StatisticsDisplay';
import WeatherData from './WeatherData';

const weatherData = new WeatherData();

const currentConditionsDisplay = new CurrentConditionsDisplay();
const forecastDisplay = new ForecastDisplay();
const heatIndexDisplay = new HeatIndexDisplay();
const statisticsDisplay = new StatisticsDisplay();

weatherData.registerObserver(currentConditionsDisplay);
weatherData.registerObserver(forecastDisplay);
weatherData.registerObserver(heatIndexDisplay);
weatherData.registerObserver(statisticsDisplay);

weatherData.setMeasurements(80, 65, 30.4);

weatherData.setMeasurements(82, 70, 29.2);

weatherData.setMeasurements(78, 90, 29.2);
