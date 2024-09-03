<?php

namespace Hello\Composer;

class Alice {
  public static function greet(): string {
    return Greeter::greet('Alice');
  }
}
