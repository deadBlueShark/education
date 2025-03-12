#!/usr/bin/perl

use 5.18.0;
use warnings;
use Data::Dumper;

my @names = ('Nguyen', 'David', 'John');
say @names; # NguyenDavidJohn

# Array is mutable
$names[0] = 'Tony';
print Dumper \@names; # ['Tony', 'David', 'John']

push @names, 'Mark';
print Dumper \@names; # ['Tony', 'David', 'John', 'Mark']
push @names, qw(Quan Vu);
print Dumper \@names; # ['Tony', 'David', 'John', 'Mark', 'Quan', 'Vu']

my $last_element = pop @names;
say $last_element;    # Vu
print Dumper \@names; # ['Tony', 'David', 'John', 'Mark', 'Quan']

my $first_element = shift @names;
say $first_element;   # Tony
print Dumper \@names; # ['David', 'John', 'Mark', 'Quan']

unshift @names, ('Jack', 'James');
print Dumper \@names; # ['Jack', 'James', David', 'John', 'Mark', 'Quan']
