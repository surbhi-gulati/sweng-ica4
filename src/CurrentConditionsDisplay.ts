import WeatherData from './WeatherData';
import { WeatherDataObserver } from './WeatherDataObserver';

export default class CurrentConditionsDisplay implements WeatherDataObserver {
  update(weatherData: WeatherData): void {
    CurrentConditionsDisplay.displayCurrentConditions(weatherData);
  }

  static displayCurrentConditions(weatherData: WeatherData): void {
    // eslint-disable-next-line
    console.log('Current conditions: %fF degrees and %f% humidity', weatherData.temperature, weatherData.humidity);
  }
}
