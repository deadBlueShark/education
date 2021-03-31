import java.util.Arrays;

public class MyClass {
  public static void main(String args[]) {
    int[] data = {99, 1, 77, 2, 98, 3, 4, 7, 32, 8, 9, 14, 17, 35};
    mergeSort(data, 0, data.length - 1);
    System.out.println(Arrays.toString(data));
  }
  
  private static void mergeSort(int arr[], int left, int right) {
    int mid = (left + right) / 2;
    
    if (left >= right) return;
    
    // Breakdown array into sub-arrays until it has 1 element 

    // Divide left halve
    mergeSort(arr, left, mid);
    // Divide right halve
    mergeSort(arr, mid + 1, right);

    // Conquer and combine
    merge(arr, left, mid, right);
  }
  
  private static void merge(int arr[], int left, int mid, int right) {
    // Sizes of two subarrays to be merged
    int leftLength = mid - left + 1;
    int rightLength = right - mid;

    // Temp container subarrays to compare before merged
    int[] leftTemp = new int[leftLength];
    int[] rightTemp = new int[rightLength];

    int i, j;
    
    // Copy data from 2 divided halves to temp container
    for (i = 0; i < leftLength; i++) {
      leftTemp[i] = arr[left + i];
    }
    for (i = 0; i < rightLength; i++) {
      rightTemp[i] = arr[mid + i + 1];
    }
    
    i = 0;
    j = 0;
    
    // Pick each item on each halves in sorted order

    while (i < leftLength && j < rightLength) {
      if (leftTemp[i] < rightTemp[j]) {
        arr[left + i + j] = leftTemp[i];
        i++;
      } else {
        arr[left + i + j] = rightTemp[j];
        j++;
      }
    }
    
    // Copy remaining elements of left halve if any
    while (i < leftLength) {
      arr[left + i + j] = leftTemp[i];
      i++;
    }
    
    // Copy remaining elements of right halve if any
    while (j < rightLength) {
      arr[left + i + j] = rightTemp[j];
      j++;        
    }
  }
}