#!/usr/bin/perl

use 5.18.0;
use warnings;

our $text = q(This is a line of text);

# Search all 'i' and replace by 'I'
$text =~ s/i/I/g;
say $text;
