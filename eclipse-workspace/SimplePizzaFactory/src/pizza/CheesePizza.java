package pizza;

public class CheesePizza extends Pizza {
	public CheesePizza() {
		name = "Cheese Pizza";
		dough = "Cheese dough";
		sauce = "Cheese sauce";
	}

	@Override
	public void cut() {
		System.out.println("Square slices cut");
	}
}
