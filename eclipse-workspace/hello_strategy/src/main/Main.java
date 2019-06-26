/*
 * The Strategy Pattern
 */

package main;

import duck.DecoyDuck;
import duck.Duck;
import duck.Goose;
import duck.Mallard;
import duck.RubberDuck;
import fly.HighFlying;
import fly.LowFlying;
import fly.NoFlying;
import quack.NoQuacking;
import quack.StrongQuack;
import quack.WeakQuack;

public class Main {
	public static void main(String[] args) {
		System.out.println("=============================");
		System.out.println("Decoy Duck characteristics:");
		Duck decoyDuck = new DecoyDuck(new NoFlying(), new NoQuacking());
		decoyDuck.swim();
		decoyDuck.display();
		decoyDuck.performFly();
		decoyDuck.performQuack();
		
		System.out.println("=============================");
		System.out.println("Mallard Duck characteristics:");
		Duck mallard = new Mallard(new HighFlying(), new StrongQuack());
		mallard.swim();
		mallard.display();
		mallard.performFly();
		mallard.performQuack();
		
		System.out.println("=============================");
		System.out.println("Goose characteristics:");
		Duck goose = new Goose(new LowFlying(), new WeakQuack());
		goose.swim();
		goose.display();
		goose.performFly();
		goose.performQuack();
		
		System.out.println("=============================");
		System.out.println("Rubber Duck characteristics:");
		Duck rubberDuck = new RubberDuck(new NoFlying(), new WeakQuack());
		rubberDuck.swim();
		rubberDuck.display();
		rubberDuck.performFly();
		rubberDuck.performQuack();
	}
}
