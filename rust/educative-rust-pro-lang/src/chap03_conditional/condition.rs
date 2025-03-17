fn main() {
  // Define a scrutinee expression
  let course = ("Rust", "beginner", "course");

  if let ("Rust", "beginner", "course") = course {
     println!("Wrote all values in pattern to be matched with the scrutinee expression");
  } else {
    println!("Pattern does not match the scrutinee expression");
  }

  // If the first value or second value matches, it can guess the third value
  if let ("Rust", "beginner", c) = course {
    println!("Guessed the third value as {}", c);
  } else {
    println!("Value unmatched");
  }

  // If the first value matches, it can guess the second and third values
  if let ("Rust", b, c) = course {
    println!("Guessed the second value as {}", b);
    println!("Guessed the third value as {}", c);
  } else {
    println!("Value unmatched");
  }

  let result = calculate(10, 20, '+');
  println!("Result of calculation: {}", result);
}

fn calculate(a: i32, b: i32, op: char) -> i32 {
  match op {
    '+' => a + b,
    '-' => a - b,
    '*' => a * b,
    '/' => a / b,
    _ => panic!("Invalid operator"),
  }
}


