package character;

import behavior.WeaponBehavior;

public abstract class Character {
    protected WeaponBehavior weaponBehavior;
    
	public Character(WeaponBehavior weaponBehavior) {
		this.weaponBehavior = weaponBehavior;
	}
	
	public void setWeaponBehavior(WeaponBehavior weaponBehavior) {
		this.weaponBehavior = weaponBehavior;
	}
	
    public void fight() {
    	this.weaponBehavior.useWeapon();
    }
    
    public abstract void moveWay();
}
