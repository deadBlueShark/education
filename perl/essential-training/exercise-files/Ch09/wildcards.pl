#!/usr/bin/perl
# wildcards.pl by Bill Weinman <http://bw.org/contact/>

use 5.18.0;
use warnings;

my $s = "This is a line of text";

if ( $s =~ /(text)/ ) {
    say "Match is: $1";
} else {
    say 'False';
}
