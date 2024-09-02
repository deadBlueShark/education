<?php
// Constants, by definition, are variables that cannot be modified during the execution
// of the script. They are created using the const statement or the define function.

const PI = 3.14;
define('EARTH_IS_FLAT', false);

// Checking if a constant is defined?
// The defined function doesn’t care about the constant’s value; it only cares if the constant
// exists or not. Even if the value of the constant is null or false the function will still return true.
echo defined('PI'); // true

echo "<br>";

// Get all defined constants
$constants = get_defined_constants();

define("HELLO", "hello");
define("WORLD", "world");

$new_constants = get_defined_constants();
$my_constants = array_diff_assoc($new_constants, $constants);
var_export($my_constants); // array ( 'HELLO' => 'hello', 'WORLD' => 'world', )
