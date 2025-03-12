#!/usr/bin/perl
# errno.pl by Bill Weinman <http://bw.org/contact/>

use 5.18.0;
use warnings;

my $filename = 'notfound.txt';

if (-e $filename ) {
    say 'found!';
} else {
    say "error: $!"; 
}
