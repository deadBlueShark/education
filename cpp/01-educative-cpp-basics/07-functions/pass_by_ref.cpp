#include <iostream>

using namespace std;

void change_number(int &num) {
  num++;
}

int main() {
  int number = 10;
  cout << "Before pass by ref: " << number << endl;
  change_number(number);
  cout << "After pass by ref: " << number << endl;
}
