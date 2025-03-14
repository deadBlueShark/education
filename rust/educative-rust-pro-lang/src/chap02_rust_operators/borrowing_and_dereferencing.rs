fn main() {
  println!("Rust Borrowing and Dereferencing Examples\n");

  println!("SECTION 1: BASIC REFERENCES AND DEREFERENCING");

  // Immutable reference
  let x = 10;
  let ref_x = &x; // Borrowing x

  println!("x: {}", x);
  println!("ref_x: {:p}", ref_x);        // Print memory address
  println!("*ref_x (dereferenced): {}", *ref_x); // Dereferencing

  println!("\nSECTION 2: MUTABLE REFERENCES");

  let mut y = 20;
  println!("Original y: {}", y);

  // Create a mutable reference
  let ref_y = &mut y;

  // Modify the value through the reference
  *ref_y += 5;

  println!("ref_y: {:p}", ref_y);
  println!("*ref_y (dereferenced): {}", *ref_y);
  println!("y after modification: {}", y);

  println!("\nSECTION 3: REFERENCE RULES");

  let mut value = 100;

  // Rule 1: You can have either one mutable reference OR any number of immutable references
  {
      // Multiple immutable references are allowed
      let r1 = &value;
      let r2 = &value;
      println!("Multiple immutable refs: {} and {}", r1, r2);

      // After the immutable references are no longer used, we can create a mutable reference
  }

  // Now we can create a mutable reference
  let r3 = &mut value;
  *r3 = 200;
  println!("After mutable reference: {}", value);

  println!("\nSECTION 4: BORROWING IN FUNCTIONS");

  let mut number = 50;
  println!("Before function call: {}", number);

  // Pass by immutable reference
  print_number(&number);

  // Pass by mutable reference
  add_ten(&mut number);
  println!("After add_ten: {}", number);

  println!("\nSECTION 5: DEREFERENCING OPERATOR");

  let mut value = 300;
  let ref_value = &mut value;

  // Dereferencing to modify
  *ref_value = 350;
  println!("After dereferencing assignment: {}", value);

  println!("\nSECTION 6: AUTO-DEREFERENCING WITH METHODS");

  let name = String::from("Rust");
  let ref_name = &name;

  // No explicit dereference needed for methods
  println!("Length: {}", ref_name.len()); // Auto-dereferenced
  println!("Uppercase: {}", ref_name.to_uppercase());

  println!("\nSECTION 7: REFERENCES TO REFERENCES");

  let original = 500;
  let ref1 = &original;
  let ref2 = &ref1;
  let ref3 = &ref2;

  // Multiple dereferences
  println!("original: {}", original);
  println!("*ref1: {}", *ref1);
  println!("**ref2: {}", **ref2);
  println!("***ref3: {}", ***ref3);

  println!("\nSECTION 8: BOX - HEAP ALLOCATION AND DEREFERENCING");

  let heap_value = Box::new(100);
  println!("Box value: {}", heap_value);
  println!("Dereferenced box: {}", *heap_value);

  println!("\nSECTION 9: BORROWING STRUCTS");

  let mut person = Person {
    name: String::from("Alice"),
    age: 30,
  };

  // Borrow the whole struct
  let person_ref = &person;
  println!("Person: {} is {} years old", person_ref.name, person_ref.age);

  // Borrow just one field
  let name_ref = &person.name;
  println!("Name reference: {}", name_ref);

  // Mutable borrow to modify a field
  let age_ref = &mut person.age;
  *age_ref += 1;
  println!("Updated age: {}", person.age);

  println!("\nSECTION 10: DANGLING REFERENCES (PREVENTED BY RUST)");

  let safe_reference = no_dangling_reference();
  println!("Safe reference: {}", safe_reference);

  // This would cause a compile error if uncommented:
  // let dangling_ref = create_dangling_reference();
  println!("Rust prevents dangling references at compile time");
}

// Function that takes an immutable reference
fn print_number(n: &i32) {
  println!("Number: {}", n);
}

// Function that takes a mutable reference
fn add_ten(n: &mut i32) {
  *n += 10;
}

// Struct for borrowing examples
struct Person {
  name: String,
  age: u32,
}

// Function that returns a reference to a value that won't be dropped
fn no_dangling_reference() -> &'static str {
  // Static strings have a 'static lifetime
  "I'm a string literal with static lifetime"
}

// This function would create a dangling reference if it compiled
// Rust prevents this at compile time
/*
fn create_dangling_reference() -> &String {
  let s = String::from("I'll be dropped");
  &s // ERROR: returns a reference to data owned by the current function
}
*/
