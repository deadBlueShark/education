package duck;

import behaviour.Flyable;
import behaviour.Quackable;

public class Mallard extends Duck {
	public Mallard(Flyable flyBehavior, Quackable quackBehavior) {
      super(flyBehavior, quackBehavior);
	}

	@Override
	public void display() {
		System.out.println("I'm thin and very flexible!");
	}

}
