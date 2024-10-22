#include <iostream>

using namespace std;

int main() {
  int current_amount = 10;
  cout << "Your current amount is : " << current_amount << endl;
  current_amount++;
  cout << "Your current amount is : " << current_amount << endl;
  current_amount += 100;
  cout << "Your current amount is : " << current_amount << endl;

  const int MAX_AMOUNT = 100;
  cout << "Max amount is fixed at: " << MAX_AMOUNT << endl;

  cout << endl << endl;

  cout << "Swap values:" << endl;
  int first_var = 10, second_var = 20;
  cout << "INIT VALUES: " << endl;
  cout << "- First value : " << first_var << endl;
  cout << "- Second value : " << second_var << endl;

  int temp = first_var;
  first_var = second_var;
  second_var = temp;

  cout << "VALUE AFTER SWAP: " << endl;
  cout << "- First value : " << first_var << endl;
  cout << "- Second value : " << second_var << endl;
}
