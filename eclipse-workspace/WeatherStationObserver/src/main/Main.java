package main;

import device.ScienceDevice;
import device.TVForecast;
import weathercenter.WeatherStation;

public class Main {
	public static void main(String[] args) {
		WeatherStation weatherCenter = new WeatherStation();
	
		TVForecast tv = new TVForecast();
		weatherCenter.registerObserver(tv);
		
		ScienceDevice scienceDevice = new ScienceDevice();
		weatherCenter.registerObserver(scienceDevice);
		
		weatherCenter.updateMeasurements(39, 90, 1.1f);
		
		tv.display();
		scienceDevice.display();
	}
}
