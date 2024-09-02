<?php
// Using PHP, we can access data through dynamic variable names. The name of
// a variable can be stored in another variable, allowing it to be accessed
// dynamically. Such variables are known as variable variables.

$foo = "bar"; // $foo has value "bar"
$$foo = "data"; // $bar has value "data"

echo $foo . "<br>"; // bar
echo $$foo . "<br>"; // data
echo $bar. "<br>"; // data