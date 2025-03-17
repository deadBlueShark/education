fn main() {
  println!("Rust if-let Expressions\n");

  println!("SECTION 1: BASIC IF-LET WITH OPTION");

  let some_value = Some(42);

  // Traditional match approach
  println!("Using match:");
  match some_value {
    Some(value) => println!("Got a value: {}", value),
    None => println!("No value"),
  }

  // Using if-let (more concise for single pattern matching)
  println!("\nUsing if-let:");
  if let Some(value) = some_value {
    println!("Got a value: {}", value);
  } else {
    println!("No value");
  }

  println!("\nSECTION 2: IF-LET WITH NONE");

  let no_value: Option<i32> = None;

  if let Some(value) = no_value {
    println!("Got a value: {}", value);
  } else {
    println!("No value found");
  }

  println!("\nSECTION 3: IF-LET WITH RESULT");

  let success: Result<i32, &str> = Ok(100);
  let failure: Result<i32, &str> = Err("Something went wrong");

  // Success case
  if let Ok(value) = success {
    println!("Operation succeeded with value: {}", value);
  } else {
    println!("Operation failed");
  }

  // Failure case
  if let Err(error) = failure {
    println!("Operation failed with error: {}", error);
  } else {
    println!("Operation succeeded");
  }

  println!("\nSECTION 4: IF-LET WITH CUSTOM ENUMS");

  let user = User::LoggedIn { name: String::from("Alice"), role: Role::Admin };

  if let User::LoggedIn { name, role: Role::Admin } = user {
    println!("Admin user logged in: {}", name);
  } else {
    println!("Not an admin user");
  }

  println!("\nSECTION 5: IF-LET WITH DESTRUCTURING");

  let point = Point { x: 10, y: 20 };

  if let Point { x, y } = point {
    println!("Point coordinates: ({}, {})", x, y);
  }

  // Destructuring with specific values
  if let Point { x: 10, y } = point {
    println!("Point has x=10 and y={}", y);
  } else {
    println!("Point doesn't have x=10");
  }

  println!("\nSECTION 6: IF-LET WITH TUPLES");

  let coordinates = (10, 20, 30);

  if let (x, y, 30) = coordinates {
    println!("Coordinates with z=30: ({}, {})", x, y);
  } else {
    println!("Coordinates don't have z=30");
  }

  println!("\nSECTION 7: IF-LET WITH GUARDS");

  let number = Some(42);

  if let Some(n) = number {
    if n > 40 {
      println!("Got a number greater than 40: {}", n);
    } else {
      println!("Got a number, but it's not greater than 40: {}", n);
    }
  } else {
    println!("Number is None");
  }

  println!("\nSECTION 8: COMBINING IF-LET WITH ELSE IF");

  let value: Option<i32> = Some(5);

  if let Some(n) = value {
    if n > 10 {
      println!("Large number: {}", n);
    } else {
      println!("Small number: {}", n);
    }
  } else {
    println!("No number");
  }

  println!("\nSECTION 9: PRACTICAL EXAMPLE - PARSING");

  let input = "42";
  let parsed = input.parse::<i32>();

  if let Ok(number) = parsed {
    println!("Successfully parsed '{}' as {}", input, number);
  } else {
    println!("Failed to parse '{}'", input);
  }

  println!("\nSECTION 10: IF-LET VS. UNWRAP");

  let safe_value = Some(100);
  let risky_value: Option<i32> = None;

  // Safe approach with if-let
  println!("Using if-let (safe):");
  if let Some(value) = safe_value {
    println!("Got value: {}", value);
  } else {
    println!("No value");
  }

  if let Some(value) = risky_value {
    println!("Got value: {}", value);
  } else {
    println!("No value");
  }

  // Risky approach with unwrap
  println!("\nUsing unwrap (risky):");
  println!("Safe unwrap: {}", safe_value.unwrap());

  // This would panic if uncommented:
  // println!("Risky unwrap: {}", risky_value.unwrap());
  println!("Risky unwrap would panic!");
}

// Custom enum for examples
enum User {
  LoggedIn { name: String, role: Role },
  Guest,
  Unauthorized,
}

enum Role {
  Admin,
  Regular,
  Readonly,
}

// Struct for destructuring examples
struct Point {
  x: i32,
  y: i32,
}
