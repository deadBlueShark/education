<?php
$fruits = array("Type"=>"Citrus",1=>"Orange",2=>"Grapefruit",3=>"Lemon");
print_r($fruits);
// Array ( [Type] => Citrus [1] => Orange [2] => Grapefruit [3] => Lemon )

echo "<br>";
var_dump($fruits);

echo "<br>";

echo "Array length: " . count($fruits);

echo "<br>";

array_unshift($fruits, "Banana");
print_r($fruits);
// Array ( [0] => Banana [Type] => Citrus [1] => Orange [2] => Grapefruit [3] => Lemon )

echo "<br>";

array_push($fruits, "Apple");
print_r($fruits);
// Array ( [0] => Banana [Type] => Citrus [1] => Orange [2] => Grapefruit [3] => Lemon [4] => Apple )

$nums = array(1, 2, 3, 4);
echo "<br>";
unset($nums[0]);
print_r($nums); // Array ( [1] => 2 [2] => 3 [3] => 4 )
echo "<br>Element 0: $nums[0]";

