#!/usr/bin/perl
# dollars.pl by Bill Weinman <http://bw.org/contact/>

use 5.18.0;
use warnings;

my $z = 1 + 10 / 100;       # one dollar and 10 cents
say "z is $z";
printf("messy: %.30f\n", $z);

my ($d, $c) = sanitize_dollars_cents($z);

printf("sanitized: d: %.30f c: %.30f\n", $d, $c);

printf("price is %d\.%02d\n", $d, $c);

# sanitize_dollars_cents( $value )
# takes one scalar number, returns a list of two values
sub sanitize_dollars_cents {
    my $value = shift || 0;
    my $d = int($value *= 100);  # total num of cents
    my $c = int($value % 100);   # cents part only
    $d = int($d / 100);          # dollars part only

    return ($d, $c);
}
