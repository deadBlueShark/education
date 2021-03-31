import java.util.Arrays;

public class MyClass {
  public static void main(String args[]) {
    int[] data = {1, 2, 3, 4, 5, 6};
    bubbleSort(data);
    System.out.println(Arrays.toString(data));
  }
  
  private static void bubbleSort(int n[]) {
    int size = n.length;
    int temp;
    int swapCount, loopCount = 0;
    
    for (int i = 0; i < size - 1; i++) {
      swapCount = 0;
      loopCount++;
      for (int j = size - 1; j > i; j--) {
        loopCount++;
        if (n[j - 1] > n[j]) {
          temp = n[j];
          n[j] = n[j - 1];
          n[j - 1] = temp;
          swapCount++;
        }
      }
      // if (swapCount == 0) break; Optimize version
    }
    System.out.print(loopCount); // Track loop count if not used optimized version
  }
}