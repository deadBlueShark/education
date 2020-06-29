#!/usr/bin/perl
# filehandle.pl by Bill Weinman <http://bw.org/contact/>

use 5.18.0;
use warnings;

my $filename = 'lines.txt';

open(my $fh, '<', $filename) or die "Cannot open file: $!";
print while <$fh>;
close $fh;

