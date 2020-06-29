#!/usr/bin/perl

use 5.18.0;
use warnings;
use Data::Dumper;

our $text = q(This is a line of text);
our @words = split(/\s+/, $text);
say Dumper \@words;
