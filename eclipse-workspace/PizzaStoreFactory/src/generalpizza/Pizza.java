package generalpizza;

import java.util.ArrayList;
import java.util.List;

public abstract class Pizza {
	protected String name;
	protected String dough;
	protected String sauce;
	protected List<String> toppings;
	
	public Pizza() {
		toppings = new ArrayList<String>();
	}

	public void prepare() {
		System.out.println("Prepare " + dough + ", " + sauce);
		for (String topping : toppings) {
			System.out.println("Add " + topping);
		}
	}

	public void bake() {
		System.out.println("Bake");
	}

	public void cut() {
		System.out.println("Cut");
	}

	public void box() {
		System.out.println("Box");
	}

	public String getName() {
		return name;
	}
}
