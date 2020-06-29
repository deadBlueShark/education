#!/usr/bin/perl
# funcref.pl by Bill Weinman <http://bw.org/contact/>

use 5.18.0;
use warnings;

my $ref = \&func;
&{$ref}();

sub func {
    say "This is the excellent function.";
}
