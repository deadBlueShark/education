fn main() {
    // EXAMPLE 1: Basic Ownership
    let s1 = String::from("hello"); // s1 owns the string
    let s2 = s1;  // ownership moves from s1 to s2
    // println!("{}", s1);  // This would cause a compile error - s1 no longer owns the value
    println!("s2: {}", s2); // This works fine

    // EXAMPLE 2: Ownership and Functions
    let text = String::from("hello world");
    takes_ownership(text);
    // println!("{}", text);  // Would fail - ownership was moved to the function

    let number = 5;
    makes_copy(number);
    println!("I can still use number: {}", number);  // Works fine - i32 implements Copy

    // EXAMPLE 3: References and Borrowing
    let mut original = String::from("hello");

    // Borrowing immutably
    let len = calculate_length(&original);
    println!("Length of '{}' is {}.", original, len);

    // Borrowing mutably
    change_string(&mut original);
    println!("Modified string: {}", original);

    // EXAMPLE 4: Multiple References
    let reference1 = &original;
    let reference2 = &original;
    println!("Multiple immutable references: {} and {}", reference1, reference2);

    // EXAMPLE 5: Scope and Ownership
    {
        let inner_string = String::from("I'm temporary");
        println!("Inside scope: {}", inner_string);
    } // inner_string is dropped here

    // EXAMPLE 6: Return Values and Ownership
    let s1 = gives_ownership();
    println!("Received ownership: {}", s1);

    let s2 = String::from("hello");
    let s3 = takes_and_gives_back(s2);
    println!("Got back ownership: {}", s3);
}

// Function that takes ownership
fn takes_ownership(some_string: String) {
    println!("Took ownership of: {}", some_string);
} // some_string goes out of scope and is dropped

// Function that makes a copy
fn makes_copy(some_integer: i32) {
    println!("Made a copy of: {}", some_integer);
} // some_integer goes out of scope, nothing special happens

// Function that borrows a reference
fn calculate_length(s: &str) -> usize {
    s.len()
} // s goes out of scope, but because it doesn't have ownership, nothing happens

// Function that borrows mutably
fn change_string(s: &mut String) {
    s.push_str(" world");
}

// Function that gives ownership
fn gives_ownership() -> String {
    String::from("I'm yours")
}

// Function that takes and gives back ownership
fn takes_and_gives_back(a_string: String) -> String {
    a_string  // returns ownership to calling function
}
