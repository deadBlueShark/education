package duck;

import behaviour.Flyable;
import behaviour.Quackable;

public class DecoyDuck extends Duck {
	public DecoyDuck(Flyable flyBehavior, Quackable quackbehavior) {
		super(flyBehavior, quackbehavior);
	}

	@Override
	public void display() {
      System.out.println("I'm made of wood!");
	}
}
