#!/usr/bin/perl

use 5.18.0;
use warnings;
use Data::Dumper;

# An array is a variable that contains a list. People tend to use the terms interchangeably, but
# there’s a big difference. The list is the data and the array is the variable that stores that
# data. You can have a list value that isn’t in an array, but every array variable holds a list.

my @arr = (1, 2, 3);

# The array name itself (in this case, arr ) is from a completely separate namespace than scalars use;
# you can have a scalar variable named $arr in the same program, and Perl will treat them as different
# things and won’t be confused. Your maintenance programmer might be confused!
$arr[5] = 9;

say Dumper \@arr; # [1, 2, 3, undef, undef, 1]
say "Last element index: $#arr";
say "Last element: $arr[$#arr]";
