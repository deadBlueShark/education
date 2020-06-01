package generalstore;

import generalpizza.Pizza;

public abstract class PizzaStore {
    public Pizza order(String type) {
    	Pizza pizza = create(type);
    	
    	pizza.prepare();
    	pizza.bake();
    	pizza.cut();
    	pizza.box();
    	
    	return pizza;
    }
    
    // Factory method creates object, but delegate the creation of concrete objects to subclasses 
    protected abstract Pizza create(String type);
}
