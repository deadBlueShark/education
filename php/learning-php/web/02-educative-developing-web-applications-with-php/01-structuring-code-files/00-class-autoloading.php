<?php
include 'a.php';
// `require` does the same with `include`
// But its raises an error instead of a warning if the file is missing or inaccessible.
require 'b.php';

echo $a;
echo $b;

/*
 * We must explicitly include every dependency file in every file we have?
 * -> That’s a tedious job we’d like to avoid.
 * Autoloading classes:
 * PHP has a mechanism of semiautomatic file inclusion called class autoloading.
 * It allows us to register a function that gets a string with a class name and
 * includes a file containing this class. PHP will call this function every time
 * our code tries to use an undeclared class. With an autoloader, PHP loads all
 * the classes we use automatically.
 */

// Register autoloading function
spl_autoload_register(function (string $class) {
  include $class . '.php';
});

// Use classes defined in other files.
// The files will be autoloaded based on the class name.
Alice::greet();
Bob::greet();

/*
 * AutoLoading solution:
 * - PSR-4: Standard recommendation for autoloading
 * - Before namespaces were common in PHP, there was a PSR-0 standard:
 * This standard is almost the same as PSR-4 but treats underscores in
 * the class name as directory separators. This way, the class
 * PHPUnit_Framework_TestCase is located in the file PHPUnit/Framework/TestCase.php.
 * This standard is deprecated, but the old code can still have such class names.
 */
