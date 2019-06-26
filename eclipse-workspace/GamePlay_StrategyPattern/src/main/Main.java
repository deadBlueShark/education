package main;

import character.Character;
import character.Knight;
import character.Police;
import weapon.ArcheryBehavior;
import weapon.GunBehavior;
import weapon.KnifeBehavior;

public class Main {
	public static void main(String[] args) {
		Character police = new Police(new GunBehavior());
		police.moveWay();
		police.fight();
		police.setWeaponBehavior(new KnifeBehavior());
		police.fight();
		
		Character knight = new Knight(new ArcheryBehavior());
		knight.moveWay();
		knight.fight();
	}
}
