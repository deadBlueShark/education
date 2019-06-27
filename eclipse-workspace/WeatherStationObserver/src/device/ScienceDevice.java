package device;

import register.DisplayElement;
import register.Observer;

public class ScienceDevice implements Observer, DisplayElement {
	private float temperature;
	private float humidity;
	private float pressure;
	
	@Override
	public void display() {
		System.out.println("Weather Condition Statictis:");
		System.out.println("- " + temperature + "°C");
		System.out.println("- " + humidity + "%");
		System.out.println("- " + pressure + "atm");
	}
	@Override
	public void update(float temperature, float humidity, float pressure) {
		this.temperature = temperature;
		this.humidity = humidity;
		this.pressure = pressure;
	}
}
