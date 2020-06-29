#!/usr/bin/perl

use 5.18.0;
use warnings;

my $test = 'Test';
my $single_quote = q[Hello "World" $test];
say qq[Hello World $single_quote];
say "Hello \"World\"";
say qq["Hello" World];

our @words = qw(this is a list of words);
say foreach @words;
