<?php
// VARIABLES
$str = "I will be back by";
$num = 5;
echo $str . " " . $num;

echo "<br>";

// BOOLEAN
$foo = true;
if ($foo) {
  echo "true";
} else {
  echo "false";
}

echo "<br>";

// INTEGER
$negative = -9;
$zero = 0;
$positive = 2;
$zeroPos = 0123;  // 0 prefix is used to specify octal - octal value = 83 decimal
$hex = 0xAB; // 0x prefix is used to specify hexadecimal - hexadecimal value = 171 decimal
$bin = 0b1010; // 0b prefix is used to specify binary - binary value = 10 decimal
var_dump($negative, $zero, $positive, $zeroPos, $hex, $bin);
// Output: int(-9) int(0) int(2) int(83) int(171) int(10)

echo "<br>";

// FLOAT
$foo1 = 1.23;
$foo2 = 10.0;
$bar1 = -INF; // -INF refers to negative infinity
$bar2 = NAN; // NAN stands for 'Not a Number'
var_dump($foo1, $foo2, $bar1, $bar2);
// Output: float(1.23) float(10) float(-INF) float(NAN)

echo "<br>";

// ARRAY
$foo = array(7, 9, 3);
$bar = ["A", true, 123 => 5]; // Short array syntax, PHP 5.4+
var_dump($foo, $bar);
// Output:
// array(3) { [0]=> int(7) [1]=> int(9) [2]=> int(3) }
// array(3) { [0]=> string(1) "A" [1]=> bool(true) [123]=> int(5) }
echo "<br>";
echo $bar[123]; // 5

// Arrays can also associate a key other than an integer index to a value.
// In PHP, all arrays are associative arrays behind the scenes, but when we
// refer to an associative array explicitly, we usually mean one that contains
// one or more keys that aren’t integers.

echo "<br>";
$array = array(3);
$array["name"] = "Le Chi Nguyen";
$array["age"] = 20;
var_dump($array);
// Output: array(3) { [0]=> int(3) ["name"]=> string(13) "Le Chi Nguyen" ["age"]=> int(20) }

echo "<br>";

// STRING/CHAR
$foo = "I am a string";
echo $foo[3]; // Prints 'm', the third character of the string in $foo.