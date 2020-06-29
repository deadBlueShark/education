#!/usr/bin/perl
# hello.pl by Bill Weinman <http://bw.org/contact/>

use 5.18.0;
use warnings;

use constant PI => 3.141592653589793238462643383279;
use constant TRUE => 1;
use constant FALSE => '';

say PI;

if (TRUE) {
    say 'true';
} else {
    say 'false';
}

