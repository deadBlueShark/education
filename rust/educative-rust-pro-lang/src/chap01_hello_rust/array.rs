fn main() {
  // Fixed-size array declaration and initialization
  let numbers = [1, 2, 3, 4, 5];
  println!("First number: {}", numbers[0]);
  println!("Array length: {}", numbers.len());

  // Array with explicit type annotation
  let numbers_with_type: [i32; 5] = [1, 2, 3, 4, 5];
  println!("\nArray with type annotation: {:?}", numbers_with_type);

  // Initialize array with same value
  let same_values = [3; 5]; // Creates [3, 3, 3, 3, 3]
  println!("\nArray with same values: {:?}", same_values);

  // Array of strings
  let fruits = ["apple", "banana", "orange", "mango"];
  println!("\nFruits array: {:?}", fruits);

  // Iterating over array elements
  println!("\nIterating over numbers:");
  for number in numbers.iter() {
    println!("Value: {}", number);
  }

  // Iterating with index
  println!("\nIterating over fruits with index:");
  for (index, fruit) in fruits.iter().enumerate() {
    println!("Fruit at index {}: {}", index, fruit);
  }

  // Modifying array elements (using mutable array)
  // Default array is immutable
  let mut mutable_array = [1, 2, 3, 4, 5];
  mutable_array[2] = 10;
  println!("\nModified array: {:?}", mutable_array);

  // Array slicing
  let slice = &numbers[1..4]; // Gets elements at index 1, 2, and 3
  println!("\nSlice of numbers array: {:?}", slice); // [2, 3, 4]

  let slice_all_array = &numbers;
  println!("\nSlice of all numbers array: {:?}", slice_all_array);

  // Bounds checking or safe access with methods like get() which returns 
  // an Option<&T> instead of panicking on out-of-bounds access:
  let maybe_element = numbers.get(10);
  match maybe_element {
    Some(element) => println!("Element at index 10: {}", element),
    None => println!("Index 10 is out of bounds"),
  } // => Index 10 is out of bounds
}
