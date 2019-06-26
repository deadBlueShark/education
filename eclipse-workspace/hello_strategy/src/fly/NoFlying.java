package fly;

import behaviour.Flyable;

public class NoFlying implements Flyable {
	public void fly() {
		System.out.println("I can't fly!");
	}
}
