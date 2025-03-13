fn main() {
    // Basic tuple with mixed types
    let person = ("John Doe", 30, true);
    println!("Person tuple: {:?}", person);

    // Accessing tuple elements using index
    println!("\nAccessing tuple elements:");
    println!("Name: {}", person.0);
    println!("Age: {}", person.1);
    println!("Is student: {}", person.2);

    // Tuple with type annotations
    let coordinates: (f64, f64, f64) = (41.40338, 2.17403, 100.0);
    println!("\nCoordinates: {:?}", coordinates);

    // Destructuring tuples
    let (latitude, longitude, altitude) = coordinates;
    println!("\nDestructured coordinates:");
    println!("Latitude: {}", latitude);
    println!("Longitude: {}", longitude);
    println!("Altitude: {}", altitude);

    // Mutable tuple
    let mut scores = (100, 85, 90);
    println!("\nOriginal scores: {:?}", scores);
    scores.1 = 95;  // Modifying second element
    println!("Updated scores: {:?}", scores); // (100, 95, 90)

    // Nested tuples
    let complex_data = ("Rust", (2023, 12, 31), (true, 42.5));
    println!("\nNested tuple: {:?}", complex_data);
    println!("Year from nested tuple: {}", complex_data.1.0); // 2023

    // Unit tuple
    let unit = ();
    println!("\nUnit tuple (empty tuple): {:?}", unit);

    // Using tuple in a function return
    let stats = calculate_stats(&[1, 2, 3, 4, 5]);
    let (min, max, avg) = stats;
    println!("\nArray statistics:");
    println!("Min: {}, Max: {}, Average: {:.2}", min, max, avg);
}

// Function that returns a tuple
fn calculate_stats(numbers: &[i32]) -> (i32, i32, f64) {
    let min = *numbers.iter().min().unwrap_or(&0);
    let max = *numbers.iter().max().unwrap_or(&0);
    let sum: i32 = numbers.iter().sum();
    let avg = sum as f64 / numbers.len() as f64;
    
    (min, max, avg)
}
