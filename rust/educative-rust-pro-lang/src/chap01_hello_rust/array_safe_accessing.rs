fn main() {
  println!("Rust Array Safe Accessing Techniques\n");

  // Basic array declaration
  let numbers = [1, 2, 3, 4, 5];

  // 1. Safe access with index checking
  println!("1. SAFE ACCESS WITH INDEX CHECKING");
  let index = 3;
  match numbers.get(index) {
    Some(value) => println!("Value at index {}: {}", index, value),
    None => println!("Index {} is out of bounds", index),
  }

  // Out of bounds example
  let out_of_bounds_index = 10;
  match numbers.get(out_of_bounds_index) {
    Some(value) => println!("Value at index {}: {}", out_of_bounds_index, value),
    None => println!("Index {} is out of bounds", out_of_bounds_index),
  }

  // 2. Iterating safely over arrays
  println!("\n2. ITERATING SAFELY OVER ARRAYS");
  println!("Using iter():");
  for (i, &num) in numbers.iter().enumerate() {
    println!("numbers[{}] = {}", i, num);
  }

  // 3. Array bounds checking at compile time
  println!("\n3. ARRAY BOUNDS CHECKING AT COMPILE TIME");
  // This would cause a compile error if uncommented:
  // let compile_time_check: [i32; 3] = [1, 2, 3, 4]; // Too many elements
  println!("Rust checks array sizes at compile time when possible");

  // 4. Using slices for safe sub-arrays
  println!("\n4. USING SLICES FOR SAFE SUB-ARRAYS");
  let slice = &numbers[1..4]; // Elements at indices 1, 2, and 3
  println!("Slice: {:?}", slice);

  // 5. Safely modifying arrays
  println!("\n5. SAFELY MODIFYING ARRAYS");
  let mut mutable_array = [10, 20, 30, 40, 50];
  println!("Original array: {:?}", mutable_array);

  // Safe modification with bounds checking
  if let Some(element) = mutable_array.get_mut(2) {
    *element = 99;
    println!("Modified array: {:?}", mutable_array);
  }

  // 6. Handling potential panics
  println!("\n6. HANDLING POTENTIAL PANICS");
  let user_input = 6; // Simulating user input

  println!("Attempting to access index {} (unsafe way would panic)", user_input);
  // This would panic if uncommented:
  // let value = numbers[user_input]; // ❌ Would panic at runtime

  // Safe way using get()
  match numbers.get(user_input) {
    Some(value) => println!("Value: {}", value),
    None => println!(
      "Error: Index {} is out of bounds for array of length {}",
      user_input, numbers.len()
    ),
  }

  // 7. Using the if-let pattern for cleaner code
  println!("\n7. USING IF-LET FOR CLEANER CODE");
  let index = 2;
  if let Some(value) = numbers.get(index) {
    println!("Value at index {}: {}", index, value);
  } else {
    println!("Index {} is out of bounds", index);
  }

  // 8. Working with multi-dimensional arrays
  println!("\n8. WORKING WITH MULTI-DIMENSIONAL ARRAYS");
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  // Safe access to multi-dimensional array
  let row = 1;
  let col = 1;

  if row < matrix.len() && col < matrix[0].len() {
    println!("Value at matrix[{}][{}]: {}", row, col, matrix[row][col]);
  } else {
    println!("Indices [{},{}] are out of bounds", row, col);
  }

  // 9. Using unwrap_or for default values
  println!("\n9. USING UNWRAP_OR FOR DEFAULT VALUES");
  let index = 10;
  let value = numbers.get(index).unwrap_or(&0);
  println!("Value at index {} (or default): {}", index, value);
}
