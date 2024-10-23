#include <iostream>

using namespace std;

int main() {
  for (int i = 1; i <= 10; i++) {
    cout << "Outer loop: " << i << endl;

    for (int j = 1; j <= 10; j++) {
      if (j % 2 == 0) continue;
      if (j >= 7) break;

      cout << " - Inner loop: " << j << endl;
    }
  }
}
