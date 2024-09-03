<?php
// 8 variable types:
// STRING
// INTEGER
// FLOAT/DOUBLE
// BOOLEAN
// NULL
// ARRAY
// OBJECT
// RESOURCE

$name = "Nguyen";
$age = 31;
$isMale = true;
$height = 1.75;
$salary = null;

echo "<b>Variable:</b><br>";
echo "Name: " . $name . "<br>";
echo "Age: " . $age . "<br>";
echo "Is male? " . $isMale . "<br>";
echo "Height: " . $height . "<br>";
echo "Salary: " . $salary . "<br>";

echo "<br>";

echo "<b>Type of variable:</b><br>";
echo "Name: " . gettype($name) . "<br>";
echo "Age: " . gettype($age) . "<br>";
echo "Is male?: " . gettype($isMale) . "<br>";
echo "Height: " . gettype($height) . "<br>";
echo "Salary: " . gettype($salary) . "<br>";

echo "<br>";

echo "<b>Full info of variable:</b>";
echo "<br>Name: "; var_dump($name);
echo "<br>Age: "; var_dump($age);
echo "<br>Is male?: "; var_dump($isMale);
echo "<br>Height: "; var_dump($height);
echo "<br>Salary: "; var_dump($salary);

echo "<br><br>";

echo "<b>Function to check variable is of type: is_{type}():</b><br>";
echo "is_string(\$name): " . is_string($name) . "<br>";
echo "is_double(\$$height): " . is_double($height) . "<br>";

echo "<br>";

echo "<b>Function to check variable is defined or not: is_set():</b><br>";
echo "isset(\$name): " . isset($name) . "<br>";
echo "isset(\$name_a): " . isset($name_a) . "<br>";

echo "<br>";

echo "<b>Constants:</b><br>";
define('PI', 3.14);
echo "PI: " . PI . "<br>";
echo "PI is defined? " . defined('PI') . "<br>";

echo "<br>";

echo "<b>PHP built-in constants:</b><br>";
echo "PHP_INT_MAX: " . PHP_INT_MAX . "<br>";
echo "PHP_INT_MIN: " . PHP_INT_MIN . "<br>";
