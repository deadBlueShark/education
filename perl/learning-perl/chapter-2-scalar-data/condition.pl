use v5.26;

say 'Type in your age:';
chomp(my $age = <STDIN>);

while ($age > 0) {
  say "\nMy age now is $age";
  if ($age >= 18) {
    say 'You are an adults';
  } else {
    say 'You are a kid';
  }

  $age -= 2;
}


