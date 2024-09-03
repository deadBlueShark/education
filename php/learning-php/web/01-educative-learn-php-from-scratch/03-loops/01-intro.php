<?php
/*
 * while loop
 * do while loop
 * for loop
 * foreach loop
 */

$a = 10;
while ($a > 0) {
  echo $a . " ";
  $a -= 1;
}

echo "<br>";

$b = 0;
do {
  echo $b . " ";
  $b += 1;
} while ($b < 0);

echo "<br>";

for ($i = 0; $i < 10; $i++) {
  echo $i . " ";
}

echo "<br>";

$names = array("John", "Mary", "Jane");
foreach ($names as $name) {
  echo $name . " ";
}