fn main() {
  println!("I am learning Rust programming language");

  println!("1");
  println!("22");
  println!("333");

  println!("{}", 1);
  println!("{}{}", 2, 2);
  println!("{}{}{}", 3, 3, 3);

  println!("{0}", 1);
  println!("{0}{0}", 2);
  println!("{0}{0}{0}", 3);

  println!("{one}", one = 1);
  println!("{two}{two}", two = 2);
  println!("{three}{three}{three}", three = 3);
}
