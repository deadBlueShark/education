package specificpizza;

import generalpizza.Pizza;

public class NewYorkClam extends Pizza {
	public NewYorkClam() {
	    name = "New York Style Clam Pizza";
	    dough = "New York Style Clam Dough";
	    sauce = "New York Style Clam Sauce";
	    toppings.add("Topping B");
	    toppings.add("Topping C");
	}
	
	public void cut() {
		System.out.println("Square Cut Slices");
	}
}
