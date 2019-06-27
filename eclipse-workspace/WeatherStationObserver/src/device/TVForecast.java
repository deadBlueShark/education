package device;

import register.DisplayElement;
import register.Observer;
import register.Subject;

public class TVForecast implements Observer, DisplayElement {
	private float temperature;
	//private Subject weatherCenter;

//	public TVForecast(Subject weatherCenter) {
//		this.weatherCenter = weatherCenter;
//		this.weatherCenter.registerObserver(this);
//	}

	@Override
	public void display() {
		System.out.println("The temperature tomorrow is " + temperature + "°C");
	}

	@Override
	public void update(float temperature, float humidity, float pressure) {
		this.temperature = temperature;
	}

}
