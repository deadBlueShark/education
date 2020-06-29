use strict;
use warnings;
use Data::Dumper;

my %hash = map { $_, 1 } qw(no pain no gain);
print Dumper \%hash; # { 'no' => 1, 'pain' => 1, 'gain' => 1 }
