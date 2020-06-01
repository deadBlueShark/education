package specificstore;

import generalpizza.Pizza;
import generalstore.PizzaStore;
import specificpizza.ChicagoCheese;
import specificpizza.ChicagoClam;

public class ChicagoPizzaStore extends PizzaStore {
	@Override
	protected Pizza create(String type) {
		if (type.equals("cheese")) {
			return new ChicagoCheese();
		} else if (type.equals("clam")) {
			return new ChicagoClam();
		}
		return null;
	}
}
