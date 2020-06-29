#!/usr/bin/perl

use 5.18.0;
use warnings;
use Data::Dumper;

our $text = q(hello world);

# global search
our @matches = $text =~ /..l/; # [1]
say Dumper \@matches;

@matches = $text =~ /..l/g; # ['hel', 'orl']
say Dumper \@matches;

# s: treat string as a single line string (even it has new lines)
# m: treat string as multiple lines
