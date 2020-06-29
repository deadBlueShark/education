#!/usr/bin/perl

use 5.18.0;
use warnings;
use Data::Dumper;

my @a = 10..15;
my @b = splice(@a, 2);
say Dumper \@a; # (10, 11)
say Dumper \@b; # (12, 13, 14, 15)
