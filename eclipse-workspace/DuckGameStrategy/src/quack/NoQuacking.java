package quack;

import behaviour.Quackable;

public class NoQuacking implements Quackable {
    public void quack() {
    	System.out.println("I can't quack!");
    }
}
