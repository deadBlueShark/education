#!/usr/bin/perl
# hash.pl by Bill Weinman <http://bw.org/contact/>

use 5.18.0;
use warnings;

my %hash = ( one => 'uno', two => 'dos', three => 'tres', four => 'quatro', five => 'cinco' );

while( my ($k, $v) = each %hash ) {
    say "$k -> $v";
}

