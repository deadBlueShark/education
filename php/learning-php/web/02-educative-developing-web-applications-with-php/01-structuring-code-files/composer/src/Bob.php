<?php

namespace Hello\Composer;

class Bob {
  public static function greet(): string {
    return Greeter::greet('Bob');
  }
}
