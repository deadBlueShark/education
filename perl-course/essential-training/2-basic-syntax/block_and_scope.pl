#!/usr/bin/perl

use 5.18.0;
use warnings;

my $student1 = 'Nguyen';
my $student2 = 'David';
my $student3 = 'John';

func();

sub func {
  $student1 = 'Cris';
  foreach my $student ($student1, $student2, $student3) {
    say "Hello $student!";
  }
}

say $student1; # Cris
