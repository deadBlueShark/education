public class MyClass {
  public static void main(String args[]) {
    int[] data = {1, 2, 3, 4, 7, 8, 9, 14, 17, 35};
    System.out.println(binarySearch(data, 0, data.length - 1, 9));
  }
  
  private static int binarySearch(int n[], int head, int tail, int searchElement) {
    int mid = (head + tail) / 2;
    
    if (head == tail && n[mid] != searchElement) return -1;
    
    if (n[mid] == searchElement) {
      return mid;
    } else if (searchElement < n[mid]) {
      return binarySearch(n, head, mid - 1, searchElement);
    } else {
      return binarySearch(n, mid + 1, tail, searchElement);
    }
  }
}