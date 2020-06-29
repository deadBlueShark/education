use strict;
use warnings;

my @a = qw(le chi nguyen);
my @b = qw(nguyen hoang oanh);

my @nested_array = (\@a, \@b);

# Ways to get name of people in @b
print ${$nested_array[1]}[2] . "\n";
print $nested_array[1]->[2] . "\n";

# Modify name of people in @a
${$nested_array[0]}[2] = 'minh';
print ${$nested_array[0]}[2] . "\n";
$nested_array[0]->[2] = 'hoang';
print $nested_array[0]->[2] . "\n";
