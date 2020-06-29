#!/usr/bin/perl
# control.pl by Bill Weinman <http://bw.org/contact/>

use 5.18.0;
use warnings;

my $x = 'three';
my @array = qw( one two three four five );

my $count = 0;
while ($array[$count]) {
    say "$count: $array[$count]";
} continue {
    ++$count;
}

for( my $count = 0; $array[$count]; ++$count ) {
    say "$count: $array[$count]";
}
