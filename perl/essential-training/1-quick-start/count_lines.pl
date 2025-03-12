#!/usr/bin/perl

use 5.18.0;
use warnings;

# Use a scalar variable for  the name of the file
my $file_name = 'file.txt';

open(FH, $file_name) or die "Can't open '$file_name': $!"; # Open the file
my @lines = <FH>;                                          # Read the file
close(FH);                                                 # Close the file

my $line_count = scalar @lines; # Return the number of item in array
say "There are $line_count in the file.";
