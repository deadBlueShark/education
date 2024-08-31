<?php
function factorial($n) {
  if ($n == 0) {
    return 1;
  }
  return $n * factorial($n - 1);
}

echo "2! = " . factorial(2) . "<br>";
echo "3! = " . factorial(3) . "<br>";
echo "0! = " . factorial(0) . "<br>";
echo "1! = " . factorial(1) . "<br>";
echo "5! = " . factorial(5) . "<br>";

function fibonacciN($nth) {
  if ($nth == 1) return 0;
  if ($nth == 2) return 1;
  return fibonacciN($nth - 1) + fibonacciN($nth - 2);
}

echo "<br>";

// Print first 10 fibonacci:
echo "First 20 fibonacci is :<br>";
for ($i = 1; $i <= 20; $i++) {
  echo fibonacciN($i) . " ";
}