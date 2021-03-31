import java.util.Arrays;

public class MyClass {
  public static void main(String args[]) {
    int[] data = {9, 4, 3, 4, 3, 2, 2, 1, -9};
    selectionSort(data);
    System.out.println(Arrays.toString(data));
  }
  
  private void selectionSort(int n[]) {
    int size = n.length;
    int minimumIndex, temp;
    
    for (int i = 0; i < size - 1; i++) {
      minimumIndex = i;
      
      for (int j = i + 1; j < size; j++) {
        if (n[minimumIndex] > n[j]) minimumIndex = j;
      }
      
      if (i != minimumIndex) {
          temp = n[i];
          n[i] = n[minimumIndex];
          n[minimumIndex] = temp;
      }
    }
  }
}