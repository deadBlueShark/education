package IntroToAlgorithm;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class LatticeMultiplicationAlgorithm {
    public static void main(String[] args) {
        ArrayList<Integer> number1 = new ArrayList<Integer>(Arrays.asList(4, 2, 8));
        ArrayList<Integer> number2 = new ArrayList<Integer>(Arrays.asList(3, 1, 7));
        System.out.println(fibonacciMultiply(number1, number2));
    }

    public static ArrayList<Integer> fibonacciMultiply(ArrayList<Integer> X, ArrayList<Integer> Y) {
        int m = X.size();
        int n = Y.size();
        ArrayList<Integer> Z = new ArrayList<Integer>(Collections.nCopies(m + n, 0));

        int hold = 0;

        for (int k = 0; k < n + m - 1; k++) {
            for (int i = 0; i < m; i++) {
                int j = k - i;
                if (j >= 0 && j < n && i + j == k) {
                    hold += X.get(i) * Y.get(j);
                }
            }
            Z.set(k, hold % 10);
            hold /= 10;
        }
        Z.set(m + n - 1, hold);
        while (Z.size() > 1 && Z.getLast() == 0) {
            Z.removeLast();
        }
        Collections.reverse(Z);

        return Z;
    }
}
