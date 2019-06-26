package duck;

import behaviour.Flyable;
import behaviour.Quackable;

public class RubberDuck extends Duck {
    public RubberDuck(Flyable flyBehavior, Quackable quackBehavior) {
    	super(flyBehavior, quackBehavior);
    }
    
	@Override
	public void display() {
		System.out.println("My body is coverred by yellow!");
	}
}
