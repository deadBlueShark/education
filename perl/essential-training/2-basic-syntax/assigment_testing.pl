#!/usr/bin/perl

use 5.18.0;
use warnings;

my @array = (1, 2, 3);
say foreach @array;
my $count = @array;
say "There are $count items in the array.";

my ($a, $b, $c) = @array;
say "\$a = $a";
say "\$b = $b";
say "\$c = $c";
