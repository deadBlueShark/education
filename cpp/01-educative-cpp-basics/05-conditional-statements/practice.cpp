#include <iostream>

using namespace std;

int main() {
  int age;
  cout << "Enter your age: ";
  cin >> age;
  if (age >= 18) {
    cout << "You can watch this film!";
  } else {
    cout << "You can't watch this film!";
  }
}
