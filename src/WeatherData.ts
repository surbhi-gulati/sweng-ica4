import StatisticsDisplay from './StatisticsDisplay';
import ForecastDisplay from './ForecastDisplay';
import CurrentConditionsDisplay from './CurrentConditionsDisplay';
import HeatIndexDisplay from './HeatIndexDisplay';
import { WeatherDataObserver } from './WeatherDataObserver';

export default class WeatherData {
  private _observers: WeatherDataObserver[] = [];

  private _temperature = 0;

  get temperature(): number {
    return this._temperature;
  }

  private _humidity = 0;

  get humidity(): number {
    return this._humidity;
  }

  private _pressure = 0;

  get pressure(): number {
    return this._pressure;
  }

  private _statisticsDisplay = new StatisticsDisplay();

  private _forecastDisplay = new ForecastDisplay();

  public setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this._temperature = temperature;
    this._humidity = humidity;
    this._pressure = pressure;
    this.measurementsChanged();
  }

  private measurementsChanged() {
    this._observers.forEach(observer => observer.update(this));
  }

  public registerObserver(observer: WeatherDataObserver) {
    this._observers.push(observer);
  }

  public deregisterObserver(observer: WeatherDataObserver) {
    this._observers.filter(obs => obs !== observer);
  }
}
