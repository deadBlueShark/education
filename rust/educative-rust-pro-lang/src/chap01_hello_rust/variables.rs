fn main() {
    // Variable declaration and initialization
    let name = "Rust";
    println!("Language name: {}", name);

    // Mutable variables
    let mut count = 1;
    println!("Count: {}", count);
    count = 2;
    println!("Updated count: {}", count); // 2

    // Constants
    const MAX_POINTS: u32 = 100_000;
    println!("Max points: {}", MAX_POINTS);

    // Shadowing
    // Variable shadowing is a technique in which a variable declared within a certain scope
    // has the same name as a variable declared in an outer scope
    let x = 5;
    println!("x: {}", x); // 5
    let x = x + 1;
    println!("x after shadowing: {}", x); // 6

    // Different types through shadowing
    let spaces = "   ";
    println!("Spaces: '{}'", spaces); // is a string
    let spaces = spaces.len();
    println!("Number of spaces: {}", spaces); // is an int

    // Multiple variable assignment
    let (a, b, c) = (1, 2, 3);
    println!("a: {}, b: {}, c: {}", a, b, c);
}
