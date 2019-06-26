package duck;

import behaviour.Flyable;
import behaviour.Quackable;

public abstract class Duck {
    protected Flyable flyBebavior;
    protected Quackable quackBehavior;
    
	public Duck(Flyable flyBebavior, Quackable quackBehavior) {
		this.flyBebavior = flyBebavior;
		this.quackBehavior = quackBehavior;
	}
	
	// Every duck has different look, delegate this method to subclasses to implement
	public abstract void display();
	
    public void performFly() {
        flyBebavior.fly();
    }
    
    public void performQuack() {
    	quackBehavior.quack();
    }
    
    // All ducks float, so we implement swim behavior here
    public void swim() {
    	System.out.println("All ducks can swim, even decoys!");
    }
}
