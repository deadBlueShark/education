#!/usr/bin/perl
# replace.pl by Bill Weinman <http://bw.org/contact/>

use 5.18.0;
use warnings;

my $s = "This is a line of text";

$s =~ s/line/string/;
say $s;
