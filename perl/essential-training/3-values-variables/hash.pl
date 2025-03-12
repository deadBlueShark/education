#!/usr/bin/perl

use 5.18.0;
use warnings;
use Data::Dumper;

my %student_rank = (david => 3, tony => 9, james => 4);

say $student_rank{david};

my @names = keys %student_rank;
print Dumper \@names; # ["james", "tony", "david"]
my @ranks = values %student_rank;
print Dumper \@ranks; # [4, 9, 3]

while (my ($name, $rank) = each %student_rank) {
  say "$name: $rank";
}

# Add an element to a hash
$student_rank{jack} = 2;
print Dumper \%student_rank;
