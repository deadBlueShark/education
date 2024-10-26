#include <iostream>
#include <functional>

// polymorph function wrapper
std::function<int(int)> makeLambda(int x) {
  return [x](int y) {return x +  y;};
}

int main() {
  const std::function<int(int)> add5 = makeLambda(5);
  const std::function<int(int)> add10 = makeLambda(10);
  std::cout << (add5(10) == add10(5));
}