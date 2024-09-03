<?php
// Pass by value
$ori1 = 2;
$ori2 = 3;

function swapValue($num1, $num2) {
  $temp = $num1;
  $num1 = $num2;
  $num2 = $temp;
  return array($num1, $num2);
}

echo "PASS BY VALUE: <br>";
var_dump(swapValue($ori1, $ori2)); // array(2) { [0]=> int(3) [1]=> int(2) }
echo "<br>";
echo "Original value after swap: \$ori1: $ori1, \$ori2: $ori2";
// Original value after swap: $ori1: 2, $ori2: 3

function swapRef(&$num1, &$num2) {
  $temp = $num1;
  $num1 = $num2;
  $num2 = $temp;
  return array($num1, $num2);
}

echo "<br><br>";

echo "PASS BY REFERENCE: <br>";
var_dump(swapRef($ori1, $ori2)); // array(2) { [0]=> int(3) [1]=> int(2) }
echo "<br>";
echo "Original value after swap: \$ori1: $ori1, \$ori2: $ori2";
// Original value after swap: $ori1: 3, $ori2: 2 -> original value changed