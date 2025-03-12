#!/usr/bin/perl
# while.pl by Bill Weinman <http://bw.org/contact/>

use 5.18.0;
use warnings;

my @array = qw( one two three four five );

while (@array) {
    say shift @array;
}

