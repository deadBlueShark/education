#!/usr/bin/perl
# match.pl by Bill Weinman <http://bw.org/contact/>

use 5.18.0;
use warnings;

my $s = "This is a line of text";

if ( $s =~ /line/ ) {
    say 'True';
} else {
    say 'False';
}
