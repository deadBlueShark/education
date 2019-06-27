package weathercenter;

import java.util.ArrayList;
import java.util.List;

import register.Observer;
import register.Subject;

public class WeatherStation implements Subject {
	private List<Observer> observers;
	private float temperature;
	private float humidity;
	private float pressure;

	public WeatherStation() {
		observers = new ArrayList<Observer>();
	}

	@Override
	public void registerObserver(Observer o) {
		observers.add(o);
	}

	@Override
	public void removeObserver(Observer o) {
		observers.remove(o);
	}

	@Override
	public void notifyObservers() {
		for(Observer o:observers) {
			o.update(temperature, humidity, pressure);
		}
	}
	
	public void updateMeasurements(float temperature, float humidity, float pressure) {
		this.temperature = temperature;
		this.humidity = humidity;
		this.pressure = pressure;
		
		measurementsChanged();
	}

	private void measurementsChanged() {
		notifyObservers();
	}
}
