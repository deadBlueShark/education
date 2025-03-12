#!/usr/bin/perl

use 5.18.0;
use warnings;

print "What's your name? ";
my $name = <STDIN>;
print 'Hello ' . $name;

say "We random a secret number in range 1 - 100 (included). Guess what number is!";
my $secret_number = int(rand(100)) + 1;
my $guess_number;

do {
  print "Type in a number: ";
  $guess_number = int(<STDIN>);

  if ($guess_number > $secret_number) {
    say 'Too large!';
  } elsif ($guess_number < $secret_number) {
    say 'Too small!';
  } else {
    say 'Great! You got it!';
  }
} while ($guess_number != $secret_number);
