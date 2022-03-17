fn main() {
  println!("{}", "Hello");
  println!("My age: {}", 29);
  println!("{} love {} on {}", "I", "learning", "Educative!");

  // Positional argument:
  println!("{0} is so {1}! I love {0}", "Educative", "great");

  // Named argument: 
  println!("{company} is so {quality}! I love {company}", company = "Educative", quality = "great");

  // Placeholder for a Debug Trait, this prevents having to write placeholders for each value.
  println!("{:?}", ("OK", 20));
}

// How to run this file: cargo run --bin formatting