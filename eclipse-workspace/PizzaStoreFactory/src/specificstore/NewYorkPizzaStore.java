package specificstore;

import generalpizza.Pizza;
import generalstore.PizzaStore;
import specificpizza.NewYorkCheese;
import specificpizza.NewYorkClam;

public class NewYorkPizzaStore extends PizzaStore {
	@Override
	protected Pizza create(String type) {
		if (type.equals("cheese")) {
			return new NewYorkCheese();
		} else if (type.equals("clam")) {
			return new NewYorkClam();
		}
		return null;
	}
}
