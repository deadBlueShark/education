<?php
  echo "Current line is: " . __LINE__ . "\n";
  echo "Current filename is: " . __FILE__ . "\n";
  echo "Current dir is: " . __DIR__ . "\n";

  function hello(): void {
    echo "Current function is: " . __FUNCTION__ . "\n";
  }
  hello();

