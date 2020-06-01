package store;

import factory.SimplePizzaFactory;
import pizza.Pizza;

public class PizzaStore {
    private SimplePizzaFactory factory;
    
    public PizzaStore(SimplePizzaFactory factory) {
    	this.factory = factory;
    }
    
    public Pizza order(String type) {
    	Pizza pizza = factory.create(type);
    	pizza.prepare();
    	pizza.bake();
    	pizza.cut();
    	pizza.box();
    	
    	return pizza;
    }
}
