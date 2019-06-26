package duck;

import behaviour.Flyable;
import behaviour.Quackable;

public class Goose extends Duck {
	public Goose(Flyable flyBehavior, Quackable quackBehavior) {
		super(flyBehavior, quackBehavior);
	}

	@Override
	public void display() {
		System.out.println("I'm very beautiful!");
	}
}
