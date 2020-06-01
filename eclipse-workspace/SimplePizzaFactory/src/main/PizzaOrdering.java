package main;

import factory.SimplePizzaFactory;
import store.PizzaStore;

public class PizzaOrdering {
	public static void main(String[] args) {
		SimplePizzaFactory factory = new SimplePizzaFactory();
		
		PizzaStore store = new PizzaStore(factory);
		store.order("cheese");
		System.out.println("=================");
		store.order("clam");
	}
}
