#!/usr/bin/perl

use 5.18.0;
use warnings;
use Data::Dumper;

say 'The result: ' . sum(1, 3, 4);
say 'The result: ' . sum2(1, 3, 4);

sub sum {
  say Dumper \@_;
  my ($a, $b, $c) = @_;

  return $a + $b + $c;
}

sub sum2 {
  # This shift off the first item of @_, also modify it
  my $a = shift;
  my $b = shift;
  my $c = shift;

  say Dumper \@_;
  return $a + $b + $c;
}
