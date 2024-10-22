<?php
  define('FILE_NAME', 'test.txt');
  $file = fopen(FILE_NAME, "r");
  if (!$file) {
    echo "Unable to open file!";
    exit();
  }

  $file_sile = filesize(FILE_NAME);
  echo "File size: " . $file_sile . " bytes" . PHP_EOL;
  echo "File content: " . PHP_EOL . fread($file, $file_sile) . PHP_EOL;
  fclose($file);

  echo "Write to file: " . PHP_EOL;
  $file = fopen(FILE_NAME, "a");
  if (!$file) {
    echo "Unable to open file!";
    exit();
  }

  fwrite($file, "Airport" . PHP_EOL);
  fclose($file);

