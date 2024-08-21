package IntroToAlgorithm;

public class BottlesOfBeer {
    public static void main(String[] args) {
        bottlesOfBeer(10);
    }

    public static void bottlesOfBeer(int n) {
        for (int i = n; i > 0; i--) {
            System.out.println(i + " bottles of beer on the wall, " + i + " bottles of beer,");
            System.out.println("Take one down, pass it around, " + (i - 1) + " bottles of beer on the wall.");
        }
        System.out.println("No bottles of beer on the wall, no bottles of beer,");
        System.out.println("Go to the store, buy some more, " + n + " bottles of beer on the wall.");
    }
}
