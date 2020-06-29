#!/usr/bin/perl
# countlines.pl by Bill Weinman <http://bw.org/contact/>

use 5.18.0;
use warnings;

# use a scalar variable for the name of the file
my $filename = "linesfile.txt";  

open(FH, $filename);    # open the file
my @lines = <FH>;       # read the file
close(FH);              # close the file

my $count = scalar @lines;  # the number of lines in the file
say "There are $count lines in $filename";
