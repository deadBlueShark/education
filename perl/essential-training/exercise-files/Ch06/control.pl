#!/usr/bin/perl
# control.pl by Bill Weinman <http://bw.org/contact/>

use 5.18.0;
use warnings;

my $x = 'three';
my @array = qw( one two three four five );

while (@array) {
    my $y = shift @array;
    say $y;
}
