#!/usr/bin/perl

use 5.18.0;
use warnings;
use Data::Dumper;

my @numbers = (1..10);
say Dumper \@numbers; # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

my @slice = @numbers[0, 4, 5];
say Dumper \@slice; # [1, 5, 6]

my @slice_by_range = @numbers[1..3];
say Dumper \@slice_by_range; # [2, 3, 4]
