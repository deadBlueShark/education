#!/usr/bin/perl
# split.pl by Bill Weinman <http://bw.org/contact/>

use 5.18.0;
use warnings;

my $s = "This is a line of text";

my @a = split(/\s+/, $s);
say foreach @a;
