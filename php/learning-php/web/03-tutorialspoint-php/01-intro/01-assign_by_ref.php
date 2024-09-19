<?php
$x = 10;
$y = &$x; // point to $x, value is 10 now
$z = $x + $y;
echo $x . ' ' . $y . ' ' . $z . "\n";

$y = 20; // $x also 20 now
$z = $x + $y;
echo $x . ' ' . $y . ' ' . $z . "\n";
