package factory;

import pizza.CheesePizza;
import pizza.ClamPizza;
import pizza.Pizza;

public class SimplePizzaFactory {
    public Pizza create(String type) {
    	if (type.equals("cheese")) {
    		return new CheesePizza();
    	} else if (type.equals("clam")) {
    		return new ClamPizza();
    	}
    	return null;
    }
}
