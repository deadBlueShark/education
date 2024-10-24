#include <iostream>

using namespace std;

int sum(int a = 0, int b = 0) {
  return a + b;
};

int main() {
  cout << "Default sum: " << sum() << endl;
  cout << "Sum of 2 and 3: " << sum(2, 3) << endl;
}
