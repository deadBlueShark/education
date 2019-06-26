package character;

import behavior.WeaponBehavior;

public class Police extends Character {
	public Police(WeaponBehavior weaponBehavior) {
		super(weaponBehavior);
	}

	public void moveWay() {
		System.out.println("Move by car.");
	}
}
