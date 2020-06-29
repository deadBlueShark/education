#!/usr/bin/perl
# carp.pl by Bill Weinman <http://bw.org/contact/>

use 5.18.0;
use warnings;
use Carp;

func();
say "returned from function.";

sub func {
    die "This is an error message.";
}
