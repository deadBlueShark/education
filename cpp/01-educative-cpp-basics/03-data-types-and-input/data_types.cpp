#include <iostream>

using namespace std;

int main() {
  // DATA TYPE
  /* Primitive data types:
   * int(4bytes), float(4bytes), double(8bytes), char(1bytes), boolean(1bytes), void
   * - The void data type represents an entity without a value.
   * - We will see the use of void data type in functions.
   */
  double height = 1.75;
  bool sex = true;
  char first_letter = 'A';
  cout << "Height: " << height << endl;
  cout << "Sex: " << (sex ? "Male" : "Female") << endl;
  cout << "First letter: " << first_letter << endl;

  /* Derived data types:
   * function, array, pointer, reference
   */

  /* User-defined data types:
   * structure, union, enum, class, typedef
   */

  // DATA TYPE MODIFIER
  /* Data type modifiers are used with primitive data types to change
   * the meaning of predefined data types according to the situation.
   * 4 data type modifiers: long, short, unsigned, signed
   * Use data type modifiers with int, double, char
   */

  // `long` is used to increase the length of a data type to 4 more bytes
  // We can use long with int and double data types
  long int long_number = 1232323456;

  // `short` decreases the available length of a data type to 2 bytes
  // We can use `short` with an int data type
  short int short_integer = 32770;

  unsigned int int_height = (int) height;
  cout << "Convert double height to int: " << int_height << endl;

  string name = "John";
  cout << "Name: " << name << endl;
}
