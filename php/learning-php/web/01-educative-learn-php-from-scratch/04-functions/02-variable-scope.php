<?php
$num1 = 10;
$num2 = 20;

function multiply() {
  global $num1, $num2;
  return $num1 * $num2;
}

echo "num1 is: $num1 <br>";
echo "num2 is: $num2 <br>";
echo "Multiply result: " . multiply();