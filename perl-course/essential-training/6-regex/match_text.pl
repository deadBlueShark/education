#!/usr/bin/perl

use 5.18.0;
use warnings;

our $text = 'hello world';
say $text =~ /WORLD/i; # True
say $text =~ /WORLD/;  # False

# Pre-compiled Regular Expression (For using many times)
our $pe = qr/l/;
say $text =~ $pe; # True

