fn main() {
  let outer = 20;
  let mut outer2 = 30;
  
  {
    println!("{}", outer2); // 30
    outer2 = 40;
    let outer = 3;
    println!("{:?}", (outer, outer2)); // 3, 40
  }
  println!("{:?}", (outer, outer2)); // 20, 40
}