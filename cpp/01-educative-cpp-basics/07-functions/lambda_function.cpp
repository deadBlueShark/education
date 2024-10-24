#include <iostream>

using namespace std;

int main() {
  auto greet = []() {
    cout << "Hello World" << endl;
  };
  greet();

  // with implicitly return type
  auto add = [](int a, int b) {
    return a + b;
  };
  cout << "3 + 4 = " << add(3, 4) << endl;

  // with explicitly return type
  auto operation = [](int a, int b, char op) -> double {
    switch (op) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
    }
  };
  cout <<"9 + 3 = " << operation(9, 3, '+') << endl;
  cout <<"8 - 3 = " << operation(8, 3, '-') << endl;
  cout <<"8 * 3 = " << operation(8, 3, '*') << endl;
  cout <<"8 / 3 = " << operation(8, 3, '/') << endl;

  // Capture value in outside context
  string name = "Nguyen";
  auto print_name = [name]() {
    cout << name << endl;
  };
  print_name();

  // Capture by reference
  auto change_name = [&name]() {
    name = "John";
  };
  change_name();
  cout << name << endl; // John
  print_name(); // still "Nguyen"

  int num1 = 10;
  string name1 = "Harvey";
  // Capture all the variables of the enclosing function
  auto print1 = [=]() {
    cout << "Num1: " << num1 << endl;
    cout << "Name1: " << name1 << endl;
  };
  print1();

  // [&] indicates that all the variables are captured by reference.
  auto change_variables = [&]() {
    num1 = 100;
    name1 = "John Harvey";
  };
  change_variables();
  cout << num1 << endl;
  cout << name1 << endl;
}
