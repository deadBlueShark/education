package weapon;

import behavior.WeaponBehavior;

public class GunBehavior implements WeaponBehavior {
	public void useWeapon() {
		System.out.println("Gun shot!");
	}
}
