#!/usr/bin/perl
# closure.pl by Bill Weinman <http://bw.org/contact/>

use 5.18.0;
use warnings;

my $fref1 = make_counter(1);
my $fref42 = make_counter(42);

say $fref1->();
say $fref1->();
say $fref1->();

say $fref42->();
say $fref42->();
say $fref42->();

say $fref1->();
say $fref42->();
say $fref1->();
say $fref42->();

sub make_counter {
    my $n = shift || 1;
    return sub { return $n++ };
}
