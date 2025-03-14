fn main() {
  // Shared borrowing/referencing (&)
  // (can only read borrowed/referenced value, cannot alter)
  let a = 10;
  let b = &a;
  println!("Address of a: {:p}", &a); // 0x16f7da6ec
  println!("b also points to a: {:p}", b); // 0x16f7da6ec

  println!("\n");
  
  // Mutable borrowing/referencing (&mut)
  // (can read and write to the referenced value)
  let mut c = 20;
  let d = &mut c;

  // println!("Address of c: {:p}", &c);
  // -> Err: cannot borrow `c` as immutable because it is also borrowed as mutable above(d)

  println!("d points to c: {:p}", d);
  *d = 100; // Dereferencing
  println!("c after modification: {}", c); // 100
}
