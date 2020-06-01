package main;

import generalstore.PizzaStore;
import specificstore.ChicagoPizzaStore;
import specificstore.NewYorkPizzaStore;

public class PizzaOrdering {
	public static void main(String[] args) {
		PizzaStore newyorkStore = new NewYorkPizzaStore();
		PizzaStore chicagoStore = new ChicagoPizzaStore();

		newyorkStore.order("cheese");
		System.out.println("================");
		newyorkStore.order("clam");
		System.out.println("================");

		chicagoStore.order("cheese");
		System.out.println("================");
		chicagoStore.order("clam");
		System.out.println("================");
	}
}
