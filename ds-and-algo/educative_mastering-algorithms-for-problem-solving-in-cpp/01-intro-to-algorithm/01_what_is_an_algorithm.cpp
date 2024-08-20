#include <iostream>
using namespace std;

void SingBottleOfBeer(const int n) {
    for (int i = n; i > 0; i--) {
        cout << i << " bottles of beer on the wall, " << i << " bottles of beer," << endl;
        cout << "Take one down, pass it around, " << i - 1 << " bottles of beer on the wall." << endl;
        cout << endl;
    }

    cout << "No bottles of beer on the wall, no bottles of beer." << endl;
    cout << "Go to the store, buy some more, " << n << " bottles of beer on the wall." << endl;
}

int main() {
    SingBottleOfBeer(10);
    return 0;
}
