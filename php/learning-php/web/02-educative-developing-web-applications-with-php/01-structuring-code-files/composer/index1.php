<?php
use Hello\Composer\Alice;
use Hello\Composer\Bob;

require __DIR__ . '/vendor/autoload.php';

echo Alice::greet() . '<br>' . Bob::greet();
