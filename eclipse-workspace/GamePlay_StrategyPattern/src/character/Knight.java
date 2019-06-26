package character;

import behavior.WeaponBehavior;

public class Knight extends Character {
	public Knight(WeaponBehavior weaponBehavior) {
		super(weaponBehavior);
	}

	public void moveWay() {
		System.out.println("Move by horse");
	}
}
