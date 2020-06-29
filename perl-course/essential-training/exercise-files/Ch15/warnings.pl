#!/usr/bin/perl
# warnings.pl by Bill Weinman <http://bw.org/contact/>

use 5.18.0;
use warnings;

my @a = qw( one two three four five );

my $x = func();
say "The result is $x";

sub func {
    no warnings;
    return @a[3];
}
