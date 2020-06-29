#!/usr/bin/perl
# arrayref.pl by Bill Weinman <http://bw.org/contact/>

use 5.18.0;
use warnings;

my @array = qw( one two three four five );
my $ref = \@array;
say foreach @{$ref};
