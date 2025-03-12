#!/usr/bin/perl

use 5.18.0;
use warnings;

my @numbers = (1..5);
say 'Hello' while (pop @numbers);

@numbers = (1..5);
say "Current number: ${\(pop @numbers)}" while (scalar @numbers);

@numbers = (1..5);
say foreach (@numbers); # In this version the () is optional
