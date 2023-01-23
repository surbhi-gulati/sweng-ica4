import WeatherData from "./WeatherData";

export interface WeatherDataObserver {
  update(weatherData: WeatherData): void;
}