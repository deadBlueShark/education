#include <cstring>
#include <iostream>
#include <ostream>

const char* min(const char* s, const char* t) {
  return strcmp(s, t) < 0 ? s : t;
}

float min(float x, float y) {
  return x > y ? y : x;
}

int main() {
  const char* m = min("hello", "world");
  std::cout << "'hello' or 'world' lesser: " << m << std::endl;

  std::cout << "9.3 or -9.3 lesser: " << min(9.3, -9.3) << std::endl;
}
