#!/usr/bin/perl

use 5.18.0;
use warnings;

my @words = qw(Le Chi Nguyen);
foreach my $word (@words) {
  say $word;
}

say '*' x 50;
foreach (@words) {
  say $_;
}

say '*' x 50;
foreach (0..4) {
  say;
}

say '*' x 50;
for (my $i = 0; $i < 5; $i++) {
  say $i;
}
