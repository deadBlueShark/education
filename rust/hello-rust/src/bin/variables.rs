fn main() {
  // Variable is immutable by default
  let name = "Rust";
  // name = "Ruby"; Error: cannot assign twice to immutable variable
  print!("Language: {}\n", name);

  // Make variables mutable
  let mut language = "Ruby";
  println!("Language: {}", language);
  language = "Rust";
  println!("Language: {}", language);

  // Assigning Multiple Variables 
  let (username, age) = ("Nguyen", 28);
  println!("My name is {}. I am {} years old.", username, age);
}