#!/usr/bin/perl

use 5.18.0;
use warnings;
use Data::Dumper;

our $text = q(hello world);
our @matches = $text =~ /(..l)/; # ['hel']
say Dumper \@matches;

@matches = $text =~ /(..l)/g; # ['hel', 'orl']
say Dumper \@matches;

$text = q(This is a line of text);
@matches = $text =~ /(is ).*(.e)/;
say Dumper \@matches;

# Find what character comes after letter 'i' in sentence.
@matches = $text =~ /i(.)/g; # ['s', 's', 'n']
say Dumper \@matches;
