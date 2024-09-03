<?php

namespace Hello\Composer;

class Greeter {
  public static function greet(string $name): string {
    return "Hello $name!";
  }
}
