#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>

using namespace std;

int main() {
  vector<int> nums = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

  const int even_count = count_if(
  nums.begin(),
  nums.end(), [](const int i) { return i % 2 == 0; }
  );

  cout << "even_count: " << even_count << endl;

  const int sum = accumulate(
  nums.begin(),
  nums.end(),
  0,
  [](const int i1, const int i2) { return i1 + i2; }
  );
  cout << "sum: " << sum << endl;
}
