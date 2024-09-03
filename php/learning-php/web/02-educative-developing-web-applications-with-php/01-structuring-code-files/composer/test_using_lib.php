<?php
require __DIR__ . '/vendor/autoload.php';

// Install by command: `composer require malios/php-to-ascii-table`
$builder = new \AsciiTable\Builder();

// Top 5 results after searching "ascii table" in packagist.org at the moment of writing this
$builder->addRows([
  ['Package' => 'mathieuviossat/arraytotexttable', 'Downloads' => 726940, 'Stars' => 56],
  ['Package' => 'malios/php-to-ascii-table', 'Downloads' => 15765, 'Stars' => 16],
  ['Package' => 'pgooch/php-ascii-tables', 'Downloads' => 2642, 'Stars' => 31],
  ['Package' => 'ltd-beget/ascii-table', 'Downloads' => 22614, 'Stars' => 2],
  ['Package' => 'tridcatij/asciitables', 'Downloads' => 101, 'Stars' => 1],
]);

$builder->setTitle("Search results");

echo $builder->renderTable();

// Run this in terminal: php test_using_lib.php
